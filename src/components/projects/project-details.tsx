"use client";

import Image from "next/image";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { Project } from "@/lib/types";
import Animated from "../framer-motion/animated";
import OpenImage from "../shared/open-image";
import ImageDialog from "../shared/image-dialog";

export default function ProjectDetails({ project }: { project: Project }) {
  /*
  const targetRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const x = useTransform(scrollYProgress, [0.8, 1], ["0%", "-20%"]);
  */

  const landscape = project?.images?.type === "landscape" ? true : false;
  //console.log(landscape);

  const router = useRouter();

  const [open, setOpen] = React.useState<any>(null);
  const [idx, setIdx] = React.useState<number | null>(null);

  //generate images array with the count like Array.from({ length: project?.images?.count }, (_, index) => {
  const images = Array.from({ length: project?.images?.count }, (_, index) => {
    return `${project?.images?.path}${index + 1}.png`;
  });

  return (
    <Animated className="flex flex-col rounded-xl w-full pb-5">
      {/** Project title, description and logo */}
      <div
        className="flex justify-between gap-3 items-start pr-5 lg:pr-28 group cursor-pointer"
        onClick={() => {
          router.push(`/projects/${project.id}`);
          //scroll to top
        }}
      >
        {/** Logo */}
        <Image
          alt="Logo"
          src={project?.logo}
          width={100}
          height={100}
          className="bg-white h-12 w-12 rounded-lg mt-1 group-hover:scale-110 transition ease-in-out duration-300"
        />
        <div className="flex-1 flex flex-col pr-5">
          <h1 className="text-xl font-semibold group-hover:opacity-80 group-hover:underline transition ease-in-out duration-300 ">
            {project?.title}
          </h1>
          <p className="text-sm opacity-80 line-clamp-1">
            {project?.description}
          </p>
          <div className="flex items-center gap-1 opacity-70 py-1">
            <p className="text-xs flex-1">
              Last update: {formatDate(project?.date)}
            </p>
          </div>
        </div>
      </div>
      {/** Display tags in badges */}

      <ul className="flex gap-2 pr-5 flex-wrap pt-2">
        {project?.tags?.map((tag: any, index: number) => (
          <p
            key={index}
            className="text-xs font-semibold opacity-80 bg-secondary rounded-full px-3 py-1"
          >
            {tag}
          </p>
        ))}
      </ul>
      {/** App Store images */}
      <ul className="flex gap-2 pr-5 pt-4 -ml-5 md:ml-0 sm:mr-5 md:mr-10 lg:mr-28 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:scrollbar-show">
        <div className="ml-3 md:-ml-2" />
        {images.map((image: any, index: number) => {
          return (
            <Image
              key={index}
              alt="Screen"
              src={image}
              width={100}
              height={100}
              sizes="100vw"
              style={{
                objectFit: "contain",
                width: "auto",
                height: landscape ? "250px" : "300px",
              }}
              className={`snap-start rounded-xl cursor-pointer hover:opacity-95 transition-all bg-muted`}
              onClick={() => {
                setIdx(index);
                setOpen(true);
              }}
            />
          );
        })}
      </ul>
      <ImageDialog
        idx={idx}
        setIdx={setIdx}
        open={open}
        setOpen={setOpen}
        images={images}
        title={project?.title}
      />
    </Animated>
  );
}
