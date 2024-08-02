"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { projects } from "@/db/projects";
import OpenImage from "../shared/open-image";
import ImageDialog from "../shared/image-dialog";

export default function ScreenShots({ id }: any) {
  //find the project with the same id as the prop

  const project = projects?.find((project) => project.id === id);

  const [open, setOpen] = React.useState<any>(null);
  const [idx, setIdx] = React.useState<number | null>(null);

  if (!project) return null;

  //generate images array with the count like Array.from({ length: project?.images?.count }, (_, index) => {
  const images = Array.from({ length: project?.images?.count }, (_, index) => {
    return `${project?.images?.path}${index + 1}.png`;
  });

  const landscape = project?.images?.type === "landscape" ? true : false;

  return (
    <div className="-mt-7 -mx-5 md:-mx-0 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2">
        <div className="pr-3 md:hidden" />
        {Array.from({ length: project?.images?.count }, (_, index) => {
          return (
            <Image
              key={index}
              alt="Screen"
              src={`${project?.images?.path}${index + 1}.png`}
              width={100}
              height={100}
              sizes="100vw"
              style={{
                objectFit: "contain",
                width: "auto",
                height: landscape ? "250px" : "300px",
              }}
              className={`snap-start rounded-xl cursor-pointer hover:opacity-95 transition-all`}
              onClick={() => {
                setIdx(index);
                setOpen(true);
              }}
            />
          );
        })}
        <div className="pr-3" />
      </div>
      <ImageDialog
        idx={idx}
        setIdx={setIdx}
        open={open}
        setOpen={setOpen}
        images={images}
        title={project?.title}
      />
    </div>
  );
}
