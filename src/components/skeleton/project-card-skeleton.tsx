"use client";

import React from "react";
import Animated from "../framer-motion/animated";
import { Skeleton } from "../ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <Animated className="flex flex-col rounded-xl w-full ">
      {/** Project title, description and logo */}
      <div className="flex justify-between gap-3 items-start pr-5 lg:pr-28 group cursor-pointer">
        <Skeleton className="w-12 h-12 rounded-lg bg-secondary" />
        <div className="flex-1 flex flex-col pr-5">
          <Skeleton className="h-6 max-w-60 bg-secondary" />
          <Skeleton className="h-3 w-full bg-secondary" />
          <Skeleton className="h-2 w-32 bg-secondary" />
        </div>
      </div>
      {/** Display tags in badges */}
      <div className="flex gap-2 pr-5 flex-wrap pt-2">
        {Array.from({ length: 4 }, (_, index) => {
          <Skeleton className="h-3 w-32 bg-secondary" key={index} />;
        })}
      </div>

      {/** App Store images */}
      <div className="flex gap-2 pr-5 pt-4 -ml-5 md:ml-0 sm:mr-5 md:mr-10 lg:mr-28 overflow-x-auto scrollbar-hide md:scrollbar-show">
        <div className="ml-3 md:-ml-2" />
        {Array.from({ length: 4 }, (_, index) => {
          <Skeleton
            className="w-[100px] h-[300px] rounded-lg bg-secondary"
            key={index}
          />;
        })}
      </div>
    </Animated>
  );
}
