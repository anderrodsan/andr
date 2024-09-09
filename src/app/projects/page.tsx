import React, { Suspense } from "react";
import ProjectDetails from "@/components/projects/project-details";
import ProjectSearch from "@/components/projects/project-search";
import { filterBySearchParams } from "@/lib/utils";
import { projects } from "@/db/projects";
import { Separator } from "@/components/ui/separator";
import ProjectFilters from "@/components/projects/project-filters";
import { Project } from "@/lib/types";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import ProjectCardSkeleton from "@/components/skeleton/project-card-skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrs.vercel.app/projects"),
  title: "&R Projects",
  description: "Showcase of my latest projects using Nextjs, Expo, etc.",
  openGraph: {
    type: "website",
    url: "https://andrs.vercel.app/projects",
    title: "&R Projects",
    description: "Showcase of my latest projects using Nextjs, Expo, etc.",
    images: [
      {
        url: "https://andrs.vercel.app/projects/opengraph-image.png",
        alt: "&R Projects",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@anderrodsan",
    site: "@anderrodsan",
    title: "&R Projects",
    description: "Showcase of my latest projects using Nextjs, Expo, etc.",
    images: [
      {
        url: "https://andrs.vercel.app/projects/opengraph-image.png",
        alt: "&R Projects",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function ProjectList({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    filter: string | undefined;
  };
}) {
  const filteredProjects = filterBySearchParams({
    searchParams,
    data: projects,
  });

  return (
    <Section className="w-full pr-0 md:pr-0 lg:pr-0">
      <SideContent className="">
        <ProjectFilters projects={filteredProjects} />
      </SideContent>

      <MainContent className="pt-6 flex-1 flex flex-col w-full pb-10 min-h-[100dvh] max-w-[1000px]">
        <AnimatedFirst className="text-3xl font-semibold pb-3">
          Projects
        </AnimatedFirst>

        <div className="pr-5 w-full block md:hidden">
          <ProjectSearch projects={filteredProjects} />
        </div>
        <Separator className="mb-5" />
        <div className="space-y-5 w-full">
          <Suspense fallback={<ProjectCardSkeleton />}>
            {filteredProjects?.length === 0 && (
              <div className="flex flex-col items-start justify-center w-full gap-1">
                <p className="text-sm opacity-90">No projects found</p>
                <p className="text-xs opacity-70 ">Try another search</p>
              </div>
            )}
            {filteredProjects?.map((project: Project, index: number) => (
              <ProjectDetails project={project} key={index} />
            ))}
          </Suspense>
        </div>
      </MainContent>
    </Section>
  );
}
