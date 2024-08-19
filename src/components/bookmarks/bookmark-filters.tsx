"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Bookmark, Projects } from "@/lib/types";
import { options } from "@/db/bookmarks";
import BookmarkSearch from "./bookmark-search";
import { BookmarkSide } from "./bookmark-side";

export default function BookmarkFilters({
  bookmarks,
}: {
  bookmarks: Bookmark[];
}) {
  const [filters, setFilters] = useState<any>([]);

  const pathname = usePathname();

  const searchParams = useSearchParams()!;
  const router = useRouter();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

  //read the filters searchparams and add/remove it from the query
  const handleQuery = (name: string, value: string) => {
    if (filters.includes(value)) {
      const newFilters = filters.filter((filter: any) => filter !== value);
      router.replace(
        `${pathname}?${createQueryString(name, newFilters.toString())}`
      );
      setFilters(newFilters);
    } else {
      const newFilters = [value];
      router.replace(
        `${pathname}?${createQueryString(name, newFilters.toString())}`
      );
      setFilters(newFilters);
    }
  };

  const removeQuery = (name: string, value: string) => {
    const newFilters = filters.filter((filter: any) => filter !== value);
    router.replace(
      `${pathname}?${createQueryString(name, newFilters.toString())}`
    );
    setFilters(newFilters);
  };

  return (
    <ScrollArea className="h-full pr-5 w-full">
      <p className={`text-lg font-bold`}>Filters</p>
      <div className="w-full hidden md:block pt-2">
        <BookmarkSearch bookmarks={bookmarks} setFilters={setFilters} />
      </div>

      {/* Tags */}
      <div className="pt-3">
        <p className="font-semibold pb-2 whitespace-nowrap">Tags</p>
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex gap-2 justify-between items-center hover:bg-secondary cursor-pointer rounded-lg py-1 px-2 transition duration-300 ${
                filters.includes(option.name) && "bg-secondary"
              }`}
              onClick={() => {
                handleQuery("filter", option.name);
              }}
            >
              <option.icon size={16} />
              <p className="flex-1 text-sm opacity-80">{option.name}</p>
              <p className="text-sm text-primary opacity-50">
                {
                  bookmarks?.filter((project: any) =>
                    project?.tags.includes(option.name)
                  ).length
                }
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10" />
      <ScrollBar orientation="vertical" className="hidden" />
    </ScrollArea>
  );
}
