import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Filter data based on search query
export function filterBySearchParams({
  searchParams,
  data,
}: {
  searchParams: {
    search: string | undefined;
    filter: string | undefined;
  };
  data: any;
}) {
  const search = searchParams.search?.toLowerCase();

  // Filter data based on search query
  const filteredSearch = search
    ? data.filter(
        (item: any) =>
          (item?.title && item?.title.toLowerCase().includes(search)) ||
          (item?.description &&
            item?.description.toLowerCase().includes(search))
      )
    : data;

  const filters = searchParams.filter ? searchParams.filter?.split(",") : null;

  const filteredData = filters
    ? filteredSearch.filter((item: any) => {
        return filters.every((filter: any) => item.tags.includes(filter));
      })
    : filteredSearch;

  return filteredData;
}

// Format date from 04-08-2024 to "Auygust 04, 2024 (1d ago)"
export function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

// Capitalize the first letter
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
