import { frameworks } from "@/data/frameworks";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function BentoGrid() {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 w-full">
      {frameworks.map((framework, index) => (
        <div className="group relative flex flex-col gap-5 items-center justify-center p-7 hover:scale-125 bg-secondary/50 dark:bg-slate-800 hover:bg-secondary rounded-lg col-span-1 cursor-pointer transition duration-300">
          <Image
            alt="Logo"
            src={"/svg/" + framework.logo.dark}
            width={20}
            height={20}
            className="hidden dark:block h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300"
          />
          <Image
            alt="Logo"
            src={"/svg/" + framework.logo.light}
            width={20}
            height={20}
            className="dark:hidden h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300"
          />
          <p className="absolute bottom-3 left-0 text-center text-xs hidden group-hover:block group-hover:scale-90 transition duration-300 font-medium w-full">
            {framework.name}
          </p>
        </div>
      ))}
    </div>
  );
}
