"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaginationContent, PaginationItem } from "@/components/ui/pagination";

const CategoryPage = ({ params }: { params: { category_code: string } }) => {
  const router = useRouter();
  const { category_code } = params;
  const [companies, setCompanies] = useState<CompanySearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchCompanies = async (page: number) => {
    setLoading(true);
    const response = await fetchData(
      `${apiUrl}/companies/by_category?category_code=${category_code}&page=${page}&size=10`,
    );
    setCompanies(response?.results || []);
    setTotalPages(response?.totalPages || 0);
    setLoading(false);
  };

  useEffect(() => {
    if (category_code) {
      fetchCompanies(currentPage);
    }
  }, [category_code, currentPage]);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  if (!companies.length)
    return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className="flex min-h-screen flex-col items-center p-4">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Companies in Category: {category_code}
      </h1>
      {companies.length === 0 ? (
        <p className="text-lg text-gray-600">
          No companies found in this category.
        </p>
      ) : (
        <ul className="w-full max-w-2xl space-y-4">
          {companies.map((company) => (
            <li
              key={company.company_number}
              className="flex items-center justify-between rounded bg-white p-4 shadow transition-shadow hover:shadow-md"
            >
              <Link
                href={`/companies/${company.company_number}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {company.company_name}
              </Link>
              <span className="text-gray-500">{company.company_status}</span>
            </li>
          ))}
        </ul>
      )}
      <PaginationContent className="mt-4 w-full justify-center">
        <PaginationItem>
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
        </PaginationItem>
        {/* {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <Button
              onClick={() => setCurrentPage(index + 1)} // Ensure page starts from 1
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          </PaginationItem>
        ))} */}
        <PaginationItem>
          <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
        </PaginationItem>
      </PaginationContent>
    </div>
  );
};

export default CategoryPage;
