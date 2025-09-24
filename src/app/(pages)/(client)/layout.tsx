import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Banner } from "@/components/ui/banner";
import { fetchCategories, fetchNews } from "@/lib/api";
import { Suspense } from "react";
import { SearchForm } from "@/components/Search/SearchForm";

export default async function SideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories: Category[] = await fetchCategories(100);
  const news: News[] = await fetchNews();

  return (
    <div>
      <div className="flex min-h-full w-full flex-col py-6 lg:flex-row">
        <div className="w-full lg:w-[65%]">
          <Suspense fallback={<div>Loading search form...</div>}>
            <SearchForm className="mt-4" categories={categories} news={news} />
          </Suspense>
          {children}
        </div>
        <div className="mt-6 w-full lg:mt-0 lg:w-[35%]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
