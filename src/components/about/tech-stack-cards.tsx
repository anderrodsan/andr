"use client";

import { Framework } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import ButtonTooltip from "../shared/button-tooltip";
import SlideAnimation from "../framer-motion/slide-animation";
import { MotionDiv } from "../framer-motion/motion-div";
import { AnimatePresence, motion } from "framer-motion";

export default function TechStackCards({
  data,
  title,
  delay,
  direction,
  className,
}: {
  data: Framework[];
  title: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SlideAnimation
      delay={delay}
      direction={direction}
      className={cn("space-y-3 p-3 border rounded-xl", className)}
    >
      <h2 className="font-medium">{title}</h2>
      <div className="flex flex-wrap items-center justify-start gap-3 w-full">
        {/** Tech Stack Icons */}
        {data?.map((item: Framework, index: number) => (
          <ButtonTooltip title={item?.name} key={index} side="bottom">
            <Link
              href={item?.link}
              target="_blank"
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-muted block rounded-lg z-0"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="group relative flex flex-col gap-5 items-center justify-center p-3 md:p-4 border bg-muted hover:bg-secondary rounded-lg col-span-1 cursor-pointer transition duration-300 z-10">
                <Image
                  alt="Logo"
                  src={"/svg/" + item.logo.dark}
                  width={20}
                  height={20}
                  className="hidden dark:block h-8 w-8 transition duration-300 rounded-lg"
                />
                <Image
                  alt="Logo"
                  src={"/svg/" + item.logo.light}
                  width={20}
                  height={20}
                  className="dark:hidden h-8 w-8 transition duration-300 rounded-lg"
                />
              </div>
            </Link>
          </ButtonTooltip>
        ))}
      </div>
    </SlideAnimation>
  );
}
