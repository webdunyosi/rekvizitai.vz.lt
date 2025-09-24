import { DetailedSearchForm } from "@/components/Search/DetailedSearchForm";
import { fetchCategories, fetchNews } from "@/lib/api";
import News from "@/components/Navigation/News";
import { Banner } from "@/components/ui/banner";
import Companies from "@/components/Navigation/Companies";
import Reviews from "@/components/Navigation/Reviews";

type NewsItem = {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

const DetailedSearchPage = async () => {
  const categories: Category[] = await fetchCategories(100);
  const newsData: NewsItem[] = await fetchNews();

  return (
    <div className="mt-4 flex min-h-screen w-full flex-col items-center justify-center">
      <DetailedSearchForm categories={categories} />
      <News news={newsData} />
      <Banner />
      <Companies />
      <Reviews />
    </div>
  );
};

export default DetailedSearchPage;
