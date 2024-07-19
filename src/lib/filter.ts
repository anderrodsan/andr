export function filterProducts({
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
          (item.title && item.title.toLowerCase().includes(search)) ||
          (item.description && item.description.toLowerCase().includes(search))
      )
    : data;

  console.log("a", searchParams.filter);
  //split the filters and put them in an array (might include multiple with %2C)
  const filters = searchParams.filter ? searchParams.filter?.split(",") : null;
  console.log("filters", filters);
  //filter if the project.tags include the selected filters

  const filteredProjects = filters
    ? filteredSearch.filter((project: any) => {
        return filters.every((filter: any) => project.tags.includes(filter));
      })
    : filteredSearch;

  return filteredProjects;
}
