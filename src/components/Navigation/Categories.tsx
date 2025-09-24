import React from "react";
import Link from "next/link";

const CategoriesTable = ({ categories }: { categories: Category[] }) => {
  const sortedCategories = categories.sort((a, b) =>
    a.categories.localeCompare(b.categories),
  );

  const groupedCategories = sortedCategories.reduce(
    (acc, category) => {
      const firstLetter = category.categories.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(category);
      return acc;
    },
    {} as { [key: string]: Category[] },
  );

  const firstHalf = Object.entries(groupedCategories).filter(
    ([letter]) => letter < "O",
  );
  const secondHalf = Object.entries(groupedCategories).filter(
    ([letter]) => letter >= "O",
  );

  return (
    <div className="w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-4">
      <h1 className="mb-4 text-2xl font-bold">Categories</h1>
      <div className="flex gap-4">
        <div className="flex-1 space-y-4">
          {firstHalf.map(([letter, groupedCategories]) => (
            <div key={letter} className="space-y-2">
              <h2 className="text-xl font-semibold">{letter}</h2>
              <div className="flex flex-col gap-2">
                {groupedCategories.map((category) => (
                  <Link key={category.code} href={`/category/${category.code}`}>
                    <div className="flex h-fit items-center justify-between rounded bg-white p-3 text-start shadow hover:shadow-md">
                      <span className="text-gray-600">
                        {category.categories}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-4">
          {secondHalf.map(([letter, groupedCategories]) => (
            <div key={letter} className="space-y-2">
              <h2 className="text-xl font-semibold">{letter}</h2>
              <div className="flex flex-col gap-2">
                {groupedCategories.map((category) => (
                  <Link key={category.code} href={`/category/${category.code}`}>
                    <div className="flex h-fit items-center justify-between rounded bg-white p-3 text-start shadow hover:shadow-md">
                      <span className="text-gray-600">
                        {category.categories}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
