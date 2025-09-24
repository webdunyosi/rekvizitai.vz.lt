import { ExchangeCurrency } from "@/components/Currency/ExchangeCurrency";
import { JoinDirectory } from "@/components/Auth/JoinDirectory";
import { MenuBar } from "@/components/Navigation/MenuBar";
import { Banner } from "@/components/ui/banner";
import { fetchCategories, fetchNews } from "@/lib/api";
import { Suspense } from "react";
import Stock from "@/components/Navigation/Stock";
import Raw from "@/components/Navigation/Raw";
import News from "@/components/Navigation/News";
import AdvHeader from "@/components/Advertisement/AdvHeader";

const AdvertisementPage = async () => {
  const categories: Category[] = await fetchCategories(100);
  const news: News[] = await fetchNews();

  console.log(news);

  return (
    <div className="flex min-h-screen w-full flex-col leading-none tracking-tight md:items-center">
      <Banner />
      <div className="mt-0 w-full space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
        <div className="col-span-2 flex flex-col">
          <AdvHeader />
          <Banner />
          <Suspense fallback={<div>Loading news...</div>}>
            <News news={news} />
          </Suspense>
          <Banner />
        </div>
        <div className="grid h-fit gap-4">
          <JoinDirectory />
          <MenuBar />
          <ExchangeCurrency />
          <Stock />
          <Raw />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPage;
