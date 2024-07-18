import Link from "next/link";
import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types/types";

export default function RecentProjects() {
  return (
    <section className="flex flex-col items-center md:items-start space-y-5 py-10 border-b w-full">
      {/** Header */}
      <div className="flex justify-between items-center w-full">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Recent Projects
          </h1>
          <p className="opacity-70 text-sm pt-1">
            Check out some of my projects
          </p>
        </div>
        <Link href={"/projects"} className="hidden md:block">
          <Button variant="secondary">View All</Button>
        </Link>
      </div>

      {/** Project Cards */}
      <div className="flex flex-wrap -mx-2">
        {projects.map((project: Project, index: number) => (
          <Link
            key={index}
            className="group cursor-pointer w-1/2 md:w-40 lg:w-60 px-2"
            href={`/projects/${project.id}`}
          >
            <div className="relative overflow-hidden bg-secondary w-full aspect-square rounded-lg">
              <Image
                src={`/projects/${project.id}/cover.png`}
                alt="Image"
                fill
                sizes="(50vw, 50vh)"
                style={{ objectFit: "cover", objectPosition: "start" }}
                className="group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-2 transition duration-300"
              />
            </div>
            <div className="py-2 flex items-start gap-2">
              {/** Logo */}
              <Image
                alt="Logo"
                src={project?.logo}
                width={100}
                height={100}
                className="bg-white h-12 w-12 rounded-xl mt-1 group-hover:scale-110 transition ease-in-out duration-300"
              />
              <div className="pt-1">
                <h2 className="font-semibold line-clamp-1">{project.title}</h2>
                <p className="line-clamp-1 text-sm opacity-80">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/** View All Button */}
      <Link href={"/projects"} className="md:hidden">
        <Button variant="secondary">View All</Button>
      </Link>
    </section>
  );
}
