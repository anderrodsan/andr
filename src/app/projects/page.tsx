import React from "react";
import ProjectDetails from "@/components/projects/project-details";
import ProjectSearch from "@/components/projects/project-search";
import { filterProducts } from "@/lib/filter";
import { projects } from "@/db/projects";
import { Separator } from "@/components/ui/separator";
import ProjectFilters from "@/components/projects/project-filters";
import { Project } from "@/lib/types/types";

export default function ProjectList({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    filter: string | undefined;
  };
}) {
  const filteredProjects = filterProducts({
    searchParams,
    data: projects,
  });

  return (
    <div className="relative w-full flex items-start justify-start gap-5 pl-5 md:pl-10 lg:pl-32">
      <div className="sticky top-20 hidden md:block rounded-lg pt-2 h-[80dvh] w-60 border-r">
        <ProjectFilters projects={filteredProjects} />
      </div>

      <div className="pt-6 flex-1 flex flex-col w-full pb-10 min-h-[100dvh]">
        <p className="text-3xl font-semibold pb-3">Projects</p>

        <div className="pr-5 w-full block md:hidden">
          <ProjectSearch projects={filteredProjects} />
        </div>
        <Separator className="mb-3" />
        <div className="space-y-5">
          {filteredProjects?.length === 0 && (
            <div className="flex flex-col items-start justify-center w-full gap-1">
              <p className="text-sm opacity-90">No projects found</p>
              <p className="text-xs opacity-70 ">Try another search</p>
            </div>
          )}
          {filteredProjects?.map((project: Project, index: number) => (
            <div key={index} className="pb-5">
              <ProjectDetails project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
