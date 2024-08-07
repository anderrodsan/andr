import React from "react";
import { filterBySearchParams } from "@/lib/utils";
import { bookmarks } from "@/db/bookmarks";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Project } from "@/lib/types";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import BookmarkCard from "@/components/bookmarks/bookmark-card";
import BookmarkFilters from "@/components/bookmarks/bookmark-filters";
import BookmarkSearch from "@/components/bookmarks/bookmark-search";
import Animated from "@/components/framer-motion/animated";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";

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
    <Section>
      <SideContent>
        <BookmarkFilters bookmarks={bookmarks} />
      </SideContent>

      <MainContent>
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
      </MainContent>
    </Section>
  );
}
