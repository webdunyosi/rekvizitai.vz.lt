import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SelectScrollable({
  placeholder,
  categories = [],
}: {
  placeholder: string;
  categories: Category[];
}) {
  const [scopeSelect, setScopeSelect] = useState("");

  const sortedCategories = (categories ?? []).sort((a, b) =>
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

  const handleScopeChange = (value: string) => {
    setScopeSelect(value);
  };

  const handleClearFilter = () => {
    setScopeSelect("");
  };

  return (
    <div className="flex gap-2">
      <Select value={scopeSelect} onValueChange={handleScopeChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(groupedCategories).map(
            ([letter, groupedCategories]) => (
              <SelectGroup key={letter}>
                <SelectLabel>{letter}</SelectLabel>
                {groupedCategories.map((category) => (
                  <SelectItem key={category.code} value={category.categories}>
                    {category.categories}
                  </SelectItem>
                ))}
              </SelectGroup>
            ),
          )}
        </SelectContent>
      </Select>
      {scopeSelect ? (
        <Button type="button" onClick={handleClearFilter}>
          Clear filter
        </Button>
      ) : null}
    </div>
  );
}
