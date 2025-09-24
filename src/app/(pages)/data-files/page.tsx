import BusinessListings from "@/components/Data/BusinessListings";
import CompanyData from "@/components/Data/CompanyData";
import DataPrices from "@/components/Data/DataPrices";
import Examples from "@/components/Data/Examples";
import HeaderData from "@/components/Data/HeaderData";
import Work from "@/components/Data/Work";

const DataFilesPage = () => {
  return (
    <div>
      <HeaderData />
      <Work />
      <BusinessListings />
      <Examples />
      <DataPrices />
      <CompanyData />
    </div>
  );
};

export default DataFilesPage;
