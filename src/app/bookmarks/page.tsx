import React from "react";
import { filterBySearchParams } from "@/lib/filter";
import { bookmarks } from "@/db/bookmarks";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Project } from "@/lib/types/types";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import BookmarkCard from "@/components/bookmarks/bookmark-card";
import BookmarkFilters from "@/components/bookmarks/bookmark-filters";
import BookmarkSearch from "@/components/bookmarks/bookmark-search";
import Animated from "@/components/framer-motion/animated";

export default function ProjectList({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    filter: string | undefined;
  };
}) {
  const filteredData = filterBySearchParams({
    searchParams,
    data: bookmarks,
  });

  return (
    <div className="relative w-full flex items-start justify-start gap-5 px-5 md:px-10 lg:px-32">
      <div className="sticky top-28 hidden md:block rounded-lg h-[80dvh] w-64 border-r">
        <BookmarkFilters bookmarks={bookmarks} />
      </div>

      <div className="pt-6 flex-1 flex flex-col w-full pb-10 min-h-[100dvh]">
        <AnimatedFirst className="text-3xl font-semibold pb-3">
          Bookmarks
        </AnimatedFirst>
        <div className="w-full block md:hidden">
          <BookmarkSearch bookmarks={filteredData} />
        </div>
        <Separator className="mb-3" />
        <Animated className="flex flex-col gap-1">
          {filteredData?.length === 0 && (
            <div className="flex flex-col items-start justify-center w-full gap-1">
              <p className="text-sm opacity-90">No bookmarks found</p>
              <p className="text-xs opacity-70 ">Try another search</p>
            </div>
          )}
          {filteredData?.map((bookmark: Bookmark, index: number) => {
            return (
              <div key={index}>
                <BookmarkCard
                  bookmark={bookmark}
                  bookmarks={filteredData}
                  index={index}
                />
              </div>
            );
          })}
        </Animated>
      </div>
    </div>
  );
}
