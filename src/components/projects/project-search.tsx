"use client";

import React, { useCallback } from "react";
import { Input } from "../ui/input";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Projects } from "@/lib/types";
import { FilterSide } from "./filters-side";

export default function ProjectSearch({
  projects,
  setFilters,
}: {
  projects: Projects;
  setFilters?: (filters: any) => void;
}) {
  const [text, setText] = React.useState("");
  //function to set searchparams when the input text changes path/search=text
  const pathname = usePathname();

  const searchParams = useSearchParams()!;
  const router = useRouter();

  // create a query to filter, eg. /events?status=value
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <div className="relative w-full">
          <input
            type="text"
            value={text}
            placeholder="Search..."
            className="rounded-lg w-full px-3 py-1 border-2 text-sm bg-white dark:bg-slate-950/20"
            onChange={(e) => {
              setText(e.target.value);
              router.replace(
                `${pathname}?${createQueryString(
                  "search",
                  e.target.value.toString()
                )}`
              );
            }}
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
            size={20}
          />
        </div>
        <FilterSide projects={projects} />
      </div>
      <div className="flex items-center gap-2 text-sm">
        {(searchParams.get("search") || searchParams.get("filter")) && (
          <button
            onClick={() => {
              setText("");
              setFilters && setFilters([]);
              router.replace(`${pathname}`);
            }}
            className="flex items-center gap-1 bg-secondary hover:bg-secondary/70 rounded-lg px-3 py-1 my-2"
          >
            <X className="opacity-60" size={16} />
            <p className="text-xs ">clear filters</p>
          </button>
        )}
        {projects?.length > 0 ? (
          <p className="text-sm md:text-xs py-3 opacity-70">
            {projects?.length} {projects?.length === 1 ? "result" : "results"}
          </p>
        ) : (
          <p className="text-sm md:text-xs py-3 opacity-70">No results</p>
        )}
      </div>
    </div>
  );
}
