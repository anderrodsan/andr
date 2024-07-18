import React from "react";
import Image from "next/image";
import { frameworks } from "@/data/frameworks";
import { Framework } from "@/lib/types/types";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center md:items-start pb-10 border-b">
      <h1 className="text-2xl md:text-3xl font-semibold">Tech Stack</h1>
      <p className="opacity-70 text-sm pt-1 pb-5">
        Some of the technologies I've worked with
      </p>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 w-full">
        {/** Tech Stack Icons */}
        {frameworks.map((framework: Framework, index: number) => (
          <div className="group relative flex flex-col gap-5 items-center justify-center p-7 hover:scale-125 border hover:bg-secondary/50 dark:hover:bg-slate-800 rounded-lg col-span-1 cursor-pointer transition duration-300">
            <Image
              alt="Logo"
              src={"/svg/" + framework.logo.dark}
              width={20}
              height={20}
              className="hidden dark:block h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300 rounded-lg"
            />
            <Image
              alt="Logo"
              src={"/svg/" + framework.logo.light}
              width={20}
              height={20}
              className="dark:hidden h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300 rounded-lg"
            />
            <p className="absolute bottom-3 left-0 text-center text-xs hidden group-hover:block group-hover:scale-90 transition duration-300 font-medium w-full">
              {framework.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
