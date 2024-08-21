import Link from "next/link";
import React from "react";
import Image from "next/image";
import { projects } from "@/db/projects";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import Animated from "../framer-motion/animated";
import SectionHeader from "./section-header";

export default function RecentProjects() {
  const recentProjects = projects.slice(0, 4);

  return (
    <Animated className="flex flex-col items-center md:items-start space-y-5 py-10 border-b w-full">
      <SectionHeader
        title={"Recent Projects"}
        text={"Check out some of my projects"}
        path="projects"
      />

      {/** Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-5">
        {recentProjects.map((project: Project, index: number) => (
          <Link
            key={index}
            className="group cursor-pointer w-full max-w-60"
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
            <div className="py-2 flex gap-2">
              {/** Logo */}
              <Image
                alt="Logo"
                src={project?.logo}
                width={100}
                height={100}
                className="bg-white h-7 w-7 rounded-lg mt-2"
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
    </Animated>
  );
}
