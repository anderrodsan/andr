import Link from "next/link";
import React from "react";
import Image from "next/image";
import { projects } from "@/db/projects";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import Animated from "../framer-motion/animated";
import SectionHeader from "./section-header";
import SlideAnimation from "../framer-motion/slide-animation";
import ProjectList from "../projects/project-list";

export default function RecentProjects() {
  const recentProjects = projects.slice(0, 4);

  return (
    <Animated className="flex flex-col items-center md:items-start space-y-5 w-full -mt-40">
      <SectionHeader
        title={"Recent Projects"}
        text={"Check out some of my projects"}
        path="projects"
      />

      {/** Project Cards */}
      <ProjectList projects={recentProjects} />
      {/** View All Button */}
      <Link href={"/projects"} className="md:hidden">
        <Button variant="secondary">View All</Button>
      </Link>
    </Animated>
  );
}
