import CompanyTabs from "@/components/Company/Tabs";
import { ResolvingMetadata, Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchData } from "@/lib/utils";
type Props = {
  params: { company_number: string };
};

export const revalidate = 86400; // data revalidates once in a day

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return [];
    const response = await fetch(`${apiUrl}/companies/ids?page=1&size=10`);
    if (!response.ok) {
      console.error("Failed to fetch company IDs: response not ok");
      return [];
    }
    const data = await response.json();
    if (!data || !data.results) {
      return [];
    }
    return data.results.map((companyNumber: string) => ({
      company_number: companyNumber,
    }));
  } catch (error) {
    console.error("Failed to fetch company IDs in generateStaticParams:", error);
    return [];
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const id = params.company_number;
  try {
    const response = await fetch(
      `${apiUrl}/companies/company/information?company_number=${id}`,
    );
    const data = await response.json();

    if (response.ok && data.result) {
      const company = data.result;
      const previousImages = (await parent).openGraph?.images || [];
      return {
        title: company.company_name || "Company Details",
        openGraph: {
          images: company.image
            ? [company.image, ...previousImages]
            : previousImages,
        },
      };
    } else {
      throw new Error("Company information not found");
    }
  } catch (error) {
    console.error(`Failed to fetch company metadata: ${error}`);
    return {
      title: "Company Details",
      openGraph: {
        images: [],
      },
    };
  }
}

const CompanyPage = async ({ params }: Props) => {
  const id = params.company_number;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const [
      companyData,
      historicalInfo,
      parentCompany,
      accountHistoricalInfo,
      accountStatements,
      companyCharges,
    ] = await Promise.all([
      fetchData(`${apiUrl}/companies/company/information?company_number=${id}`),
      fetchData(
        `${apiUrl}/companies/company/historical_info?company_number=${id}`,
      ),
      fetchData(
        `${apiUrl}/companies/company/parent_company?company_number=${id}`,
      ),
      fetchData(
        `${apiUrl}/companies/accounts/historical_info?company_number=${id}`,
      ),
      fetchData(`${apiUrl}/companies/accounts/statements?company_number=${id}`),
      fetchData(`${apiUrl}/companies/company/charges?company_number=${id}`),
    ]);

    if (!companyData) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-lg text-red-500">No company data available</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen w-full">
        <Suspense
          fallback={
            <div className="min-h-screen w-full">
              <Loading />
            </div>
          }
        >
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            {companyData.company_name || "Company Details"}
          </h1>
          <CompanyTabs
            companyData={companyData}
            historicalInfo={historicalInfo}
            parentCompany={parentCompany}
            accountHistoricalInfo={accountHistoricalInfo}
            accountStatements={accountStatements}
            companyCharges={companyCharges}
          />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error fetching company data:", error);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-red-500">Error loading company data</p>
      </div>
    );
  }
};

export default CompanyPage;
