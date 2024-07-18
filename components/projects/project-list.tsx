import React from "react";
import ProjectDetails from "./ProjectDetails";
import { title } from "process";
import ProjectSideBar from "./ProjectSideBar";
import ProjectSearch from "./ProjectSearch";
import { filterProducts } from "@/lib/filter";

export default function ProjectList({
  searchParams,
}: {
  searchParams: { search: string | undefined };
}) {
  const projects = [
    {
      title: "WordWise",
      description:
        "An app to translate words and keep track of the new vobaculary, with an integrated flashcards functionality for an efficient practice.",
      logo: "/logos/wordwise.png",
      images: {
        count: 6,
        path: "/projects/wordwise/screen",
      },
      tags: ["Mobile App", "Expo", "React Native", "JavaScript", "TailwindCSS"],
    },
    {
      title: "DormHive App",
      description:
        "An alternative solution to facebook tailored to tenants living in dormitories",
      logo: "/logos/dormhive.png",
      images: {
        count: 6,
        path: "/projects/dormhive-app/screen",
      },
      tags: ["Mobile App", "Expo", "React Native", "Supabase", "TailwindCSS"],
    },
    {
      title: "DormHive Dashboard",
      description:
        "An alternative solution to facebook tailored to tenants living in dormitories",
      logo: "/logos/dormhive.png",
      images: {
        count: 3,
        path: "/projects/dormhive-dash/screen",
      },
      tags: [
        "Website",
        "NextJS",
        "React Native",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
      ],
    },
  ];

  const filteredProjects = filterProducts({
    searchParams,
    data: projects,
  });

  return (
    <div className="relative flex items-start justify-start gap-5">
      <ProjectSideBar />
      <div className="pt-6 flex flex-col w-full pb-20 overflow-y-scroll">
        <p className="text-3xl font-bold pb-3">Projects</p>
        <div className="pr-5 pb-5 w-full lg:w-1/2">
          <ProjectSearch />
        </div>
        <div className="space-y-5">
          {filteredProjects.map((project: any, index: number) => (
            <div key={index} className="">
              <ProjectDetails project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
