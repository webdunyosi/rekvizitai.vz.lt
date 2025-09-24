import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import { useEffect } from "react";

export const SearchResult = ({
  searchResult,
  className,
  isLoading,
}: {
  searchResult: CompanySearchResponse | null; // Allow null for no results
  className: string;
  isLoading: boolean;
}) => {
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  if (isLoading) {
    return (
      <div
        className={cn(
          "mb-4 space-y-2 divide-y-2 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-4",
          className,
        )}
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="flex animate-pulse">
            <div className="mr-4 h-[150px] w-12 bg-gray-300" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 w-3/4 bg-gray-300 py-2" />
              <div className="h-3 w-1/2 bg-gray-300 py-2" />
              <div className="h-3 w-1/4 bg-gray-300 py-2" />
              <div className="h-3 w-1/4 bg-gray-300 py-2" />
              <div className="h-3 w-1/4 bg-gray-300 py-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!searchResult || searchResult.results.length === 0) {
    // Display a "Not Found" message if no results are found
    return (
      <div className={cn("mb-4 p-4 text-center text-gray-500", className)}>
        <h2 className="text-xl">No Results Found</h2>
        <p>Please try a different search.</p>
      </div>
    );
  }

  const { results } = searchResult;
  return (
    <div
      className={cn(
        "mb-4 space-y-2 divide-y-2 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-4",
        className,
      )}
    >
      {results.map((company, idx) => (
        <BlurFade delay={0.25 + idx * 0.05} key={company.company_number}>
          <div className="flex">
            <Image
              src="/default-company-logo.png"
              width={50}
              height={50}
              alt={company.company_name}
              className="mr-4"
            />
            <ul className="flex h-[150px] w-full list-none flex-col">
              <li>
                <Link href={`/companies/${company.company_number}`}>
                  <h2 className="text-xl font-semibold hover:underline">
                    {company.company_name}
                  </h2>
                </Link>
              </li>
              <li>{company.company_status}</li>
              <li>{company.company_type}</li>
              <li>{company.date_of_creation}</li>
              <li>{company.registered_office_locality}</li>
            </ul>
          </div>
        </BlurFade>
      ))}
    </div>
  );
};
