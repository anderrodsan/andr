import React from "react";
import Link from "next/link";
import Image from "next/image";
import SlideAnimation from "../framer-motion/slide-animation";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  projects: Project[];
  className?: string;
};
export default function ProjectList({ projects, className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-5",
        className
      )}
    >
      {projects.map((project: Project, index: number) => (
        <SlideAnimation
          key={index}
          delay={index * 0.1}
          className="w-full max-w-60"
        >
          <Link
            key={index}
            className="group cursor-pointer"
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
        </SlideAnimation>
      ))}
    </div>
  );
}
