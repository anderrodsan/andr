import BookmarkCard from "@/components/bookmarks/bookmark-card";
import BookmarkFilters from "@/components/bookmarks/bookmark-filters";
import BookmarkSearch from "@/components/bookmarks/bookmark-search";
import Animated from "@/components/framer-motion/animated";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import { bookmarks, options } from "@/db/bookmarks";
import { Bookmark } from "@/lib/types";
import { filterBySearchParams } from "@/lib/utils";

export default function ProjectList({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    filter: string | undefined;
  };
}) {
  //sort the bookmarks in order based on their category
  function sortBookmarksByCategory(bookmarks, options) {
    // Create a map of category names to an empty array
    const categorizedBookmarks = options.reduce((acc, option) => {
      acc[option.name] = [];
      return acc;
    }, {});

    // Iterate over the bookmarks and push them to the corresponding category array
    bookmarks.forEach((bookmark) => {
      bookmark.tags.forEach((tag) => {
        if (categorizedBookmarks[tag]) {
          categorizedBookmarks[tag].push(bookmark);
        }
      });
    });

    // Flatten the categorized bookmarks into a single array in the order of the options
    const sortedBookmarks = Object.values(categorizedBookmarks).flat();

    return sortedBookmarks;
  }

  const sortedBookmarks = sortBookmarksByCategory(bookmarks, options);
  //console.log(sortedBookmarks);

  const filteredData = filterBySearchParams({
    searchParams,
    data: sortedBookmarks,
  });

  return (
    <Section className="w-full pr-0 md:pr-0 lg:pr-0 mx-auto max-w-[1500px]">
      <SideContent>
        <BookmarkFilters bookmarks={bookmarks} />
      </SideContent>

      <MainContent className="flex-1 w-full flex flex-col pt-6 min-h-[100dvh] md:pl-5 max-w-[650px]">
        <AnimatedFirst className="text-3xl font-semibold pb-10">
          Bookmarks
        </AnimatedFirst>
        <div className="w-full block md:hidden">
          <BookmarkSearch bookmarks={filteredData} />
        </div>
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
