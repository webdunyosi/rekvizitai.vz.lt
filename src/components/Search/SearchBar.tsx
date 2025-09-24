"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectScrollable } from "./SelectScrollable";
import { searchCompanies } from "../../../hooks/useSearch";
import { Loader2 } from "lucide-react";

export function SearchBar({
  categories,
}: {
  categories: Category[];
}) {
  const [searchWord, setSearchWord] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [city, setCity] = useState("");
  const [scope, setScope] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<CompanySearchResponse>();

  async function handleSearch() {
    const searchParams = {
      word: searchWord,
      code: companyCode,
      city,
      sic_code: scope.length ? scope : undefined,
    };

    setIsLoading(true);
    try {
      const result = await searchCompanies(searchParams);
      setSearchResults(result);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Company Search</h1>

      <Input
        placeholder="Search word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        className="placeholder:text-slate-700"
      />

      <Input
        placeholder="Company code"
        value={companyCode}
        onChange={(e) => setCompanyCode(e.target.value)}
        className="placeholder:text-slate-700"
      />

      <Input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="placeholder:text-slate-700"
      />

      <SelectScrollable
        categories={categories}
        selectedCategories={scope}
        onChange={setScope}
        placeholder="Select Scope"
      />

      <Button
        onClick={handleSearch}
        className="bg-main-blue text-white hover:bg-black"
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Search"}
      </Button>

      {searchResults && searchResults.results.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <ul>
            {searchResults.results.map((result, index) => (
              <li key={index} className="border-b py-2">
                {result.name} - {result.city}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !isLoading && <p>No results found.</p>
      )}
    </div>
  );
}
