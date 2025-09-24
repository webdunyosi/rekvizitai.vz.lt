"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn, filterEmptyParams } from "@/lib/utils";
import {
  searchCompaniesDetailed,
  searchCompanies,
} from "../../../hooks/useSearch";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectScrollable } from "./SelectScrollable";
import { useState, Suspense } from "react";
import { SearchResult } from "./SearchResult";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { Banner } from "../ui/banner";

export const formSchemaDetailed = z
  .object({
    title: z.string().optional(),
    searchWord: z.string().optional(),
    companyCode: z.string().optional(),
    city: z.string().optional(),
    street: z.string().optional(),
    registered_since: z.string().optional(),
    scope: z.string().array().optional(),
  })
  .refine(
    (data) => {
      return (
        (data.title && data.title.length >= 2) ||
        (data.searchWord && data.searchWord.length >= 2) ||
        (data.companyCode && data.companyCode.length >= 2) ||
        (data.city && data.city.length >= 2) ||
        (data.street && data.street.length >= 2) ||
        (data.registered_since && data.registered_since.length >= 2) ||
        (data.scope && data.scope.length >= 2)
      );
    },
    {
      message: "At least one field must have at least 2 characters",
      path: ["title"],
    },
  );

export function DetailedSearchForm({
  className,
  categories,
}: {
  className?: string;
  categories: Category[];
}) {
  const [search, setSearch] = useState<CompanySearchResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchemaDetailed>>({
    resolver: zodResolver(formSchemaDetailed),
    defaultValues: {
      title: "",
      searchWord: "",
      city: "",
      street: "",
      registered_since: "",
      companyCode: "",
      scope: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaDetailed>) {
    console.log("submit", values);
    const searchParams = filterEmptyParams({
      name: values.title || "",
      word: values.searchWord || "",
      code: values.companyCode || "",
      street: values.street || "",
      registered_since: values.registered_since || "",
      city: values.city || "",
      sic_code: values.scope?.map((item) => item) || undefined,
      page: currentPage,
      page_size: 10,
    });

    console.log("Search parameters:", searchParams);

    setIsLoading(true);
    try {
      const result = await searchCompaniesDetailed(searchParams);
      console.log("Search result:", result);
      setSearch(result);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const searchParams = filterEmptyParams({
      name: form.getValues("title") || "",
      word: form.getValues("searchWord") || "",
      code: form.getValues("companyCode") || "",
      street: form.getValues("street") || "",
      registered_since: form.getValues("registered_since") || "",
      city: form.getValues("city") || "",
      sic_code: form.getValues("scope")?.map((item) => item) || undefined,
      page: page,
      page_size: 10,
    });
    fetchSearchResults(searchParams);
  }

  async function fetchSearchResults(searchParams: any) {
    setIsLoading(true);
    try {
      const result = await searchCompaniesDetailed(searchParams);
      console.log("Search result:", result);
      setSearch(result);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const totalPages = search?.total ? Math.ceil(search.total / 10) : 0;
  const maxPageButtons = 2;
  const pageRange = Math.floor(maxPageButtons / 2);
  const startPage = Math.max(
    1,
    Math.min(currentPage - pageRange, totalPages - maxPageButtons + 1),
  );
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  return (
    <div className="col-span-2 flex w-full flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "flex flex-col space-y-2 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-6",
            className,
          )}
        >
          <FormLabel className="text-2xl font-semibold">
            Detailed search
          </FormLabel>
          <FormDescription>Type in search parameters</FormDescription>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
                    className="placeholder:text-slate-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="searchWord"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Search word"
                    className="placeholder:text-slate-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="companyCode"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      placeholder="Company code"
                      className="placeholder:text-slate-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      placeholder="City"
                      className="placeholder:text-slate-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      placeholder="Street"
                      className="placeholder:text-slate-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registered_since"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      type="date" // Assuming this is a date input
                      className="placeholder:text-slate-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="scope"
            render={() => (
              <FormItem>
                <SelectScrollable categories={categories} placeholder="Scope" />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 self-end pt-2">
            <Button
              variant="secondary"
              type="submit"
              className="flex w-32 items-center bg-main-blue text-white"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 animate-spin" /> : "Search"}
            </Button>
            <Link href={"/"} className="text-main-blue">
              Basic search
            </Link>
          </div>
        </form>
      </Form>
      {!search ? (
        <div className="flex flex-col items-center justify-center py-4">
          <Banner />
        </div>
      ) : (
        <>
          <Suspense fallback={<p>Loading feed...</p>}>
            <SearchResult
              className="my-4"
              searchResult={search}
              isLoading={isLoading}
            />

            {search.results.length !== 0 ? (
              <PaginationContent className="w-full justify-center">
                <PaginationItem>
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft />
                  </Button>
                </PaginationItem>
                {startPage > 1 && (
                  <PaginationItem>
                    <Button onClick={() => handlePageChange(1)}>1</Button>
                  </PaginationItem>
                )}
                {startPage > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                  <PaginationItem key={i}>
                    <Button
                      onClick={() => handlePageChange(startPage + i)}
                      disabled={currentPage === startPage + i}
                    >
                      {startPage + i}
                    </Button>
                  </PaginationItem>
                ))}
                {endPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {endPage < totalPages && (
                  <PaginationItem>
                    <Button onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </Button>
                  </PaginationItem>
                )}
                <PaginationItem>
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            ) : null}
          </Suspense>
        </>
      )}
    </div>
  );
}
