import CategoriesTable from "@/components/Navigation/Categories";
import { ExchangeCurrency } from "@/components/Currency/ExchangeCurrency";
import { SearchForm } from "@/components/Search/SearchForm";
import { JoinDirectory } from "@/components/Auth/JoinDirectory";
import { MenuBar } from "@/components/Navigation/MenuBar";
import { Banner } from "@/components/ui/banner";
import { fetchCategories, fetchNews } from "@/lib/api";
import { Suspense } from "react";
import Stock from "@/components/Navigation/Stock";
import Raw from "@/components/Navigation/Raw";
import Companies from "@/components/Navigation/Companies";
import Reviews from "@/components/Navigation/Reviews";

export default async function Home() {
  const categories: Category[] = await fetchCategories(100);

  const news: News[] = await fetchNews();

  console.log(news);
  return (
    <div className="flex min-h-screen w-full flex-col leading-none tracking-tight md:items-center">
      <Banner />
      <div className="mt-0 w-full space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
        <div className="col-span-2 flex flex-col">
          <Suspense fallback={<div>Loading search form...</div>}>
            <SearchForm categories={categories} news={news} />
          </Suspense>
        </div>
        <div className="grid h-fit gap-4">
          <JoinDirectory />
          <MenuBar />
          <ExchangeCurrency />
          <Stock />
          <Raw />
        </div>
      </div>
      <Banner />
      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoriesTable categories={categories} />
      </Suspense>
      <Banner />
      <Companies />
      <Reviews />
    </div>
  );
}
