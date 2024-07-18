"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectImages({ project }: any) {
  if (!project) return null;

  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 h-[360px]">
        <div className="ml-3 md:-ml-2" />
        {Array.from({ length: project?.images?.count }, (_, index) => {
          return (
            <Image
              key={index}
              alt="Logo"
              src={`${project?.images?.path}${index + 1}.png`}
              width={100}
              height={100}
              sizes="100vw"
              style={{ objectFit: "contain", width: "auto", height: "350px" }}
              className={`rounded-xl h-[350px]"
            `}
            />
          );
        })}
        <div className="pr-3" />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
