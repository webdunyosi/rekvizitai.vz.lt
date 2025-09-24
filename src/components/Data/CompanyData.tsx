import Image from "next/image";
import Link from "next/link";

const CompanyData = () => {
  return (
    <div>
      <div className="my-10 flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:text-start">
        <Image
          src="/Data/6.png"
          alt="Work Image 1"
          width={500}
          height={500}
          className="rounded-md object-cover"
        />
        <div>
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">Company data</h2>
          <p className="mx-auto mb-2">
            If you need an Excel table with company data, use the Rekvizitai.lt
            PREMIUM service. You can use the service independently. After
            selecting the desired criteria, you will immediately see the number
            of companies. If the number of companies is too large, you can
            narrow the criteria until the number meets your needs. Companies can
            be independently filtered by: city, legal form, field of activity,
            keywords, income (turnover), profit, number of employees, date of
            company registration, amount of debt to Sodra (database example). If
            these criteria are not enough, contact us below contacts, and we
            will select companies for you according to your needs, in this case,
            think carefully about the criteria and specify them. Additionally,
            companies can be selected based on the following data: average
            salary and median, number of vehicles, authorized capital, EVRK
            activities, public procurement data and all other data, which we
            openly present in the company portal. In the letter, indicate which
            company data are necessary (if the company does not specify it, we
            will not include it in the list) and which are additional (if the
            company specifies it), you can conveniently filter the companies
            using Excel or import the data to your CRM system.
          </p>
          <Link
            className="text-xl font-bold text-blue-600 hover:underline"
            href="#"
          >
            See prices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
