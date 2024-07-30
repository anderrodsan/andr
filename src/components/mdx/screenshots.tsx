"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { projects } from "@/db/projects";
import OpenImage from "../shared/open-image";

export default function ScreenShots({ id }: any) {
  //find the project with the same id as the prop

  const project = projects?.find((project) => project.id === id);

  const [zoomedImage, setZoomedImage] = React.useState<any>(null);

  if (!project) return null;

  return (
    <div className="-mt-7 -mx-5 md:-mx-0 overflow-x-auto">
      <div className="flex gap-2">
        <div className="pr-3 md:hidden" />
        {Array.from({ length: project?.images?.count }, (_, index) => {
          return (
            <Image
              key={index}
              alt="Logo"
              src={`${project?.images?.path}${index + 1}.png`}
              width={50}
              height={50}
              sizes="100vw"
              style={{ objectFit: "contain", width: "auto", height: "350px" }}
              className={`rounded-xl h-[350px] cursor-pointer transition-all hover:scale-110"
            `}
              onClick={() =>
                setZoomedImage(`${project?.images?.path}${index + 1}.png`)
              }
            />
          );
        })}
        <div className="pr-3" />
      </div>
      <OpenImage zoomedImage={zoomedImage} setZoomedImage={setZoomedImage} />
    </div>
  );
}
