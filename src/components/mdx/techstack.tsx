import { projects } from "@/db/projects";
import React from "react";
import Image from "next/image";
import { frameworks } from "@/db/frameworks";
import { Plus } from "lucide-react";

export default function TechStack({ id }: { id: string }) {
  //find the project with the same id as the prop
  const project = projects?.find((project) => project.id === id);
  //create a new array including the tags that are present in the frameworks array
  const tags = frameworks.filter((framework) =>
    project?.tags.includes(framework.name)
  );

  return (
    <div className="flex flex-wrap items-center justify-start gap-2 w-full">
      {/** Tech Stack Icons */}
      {tags.map((tag: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div className="group relative h-24 w-24 flex flex-col gap-5 items-center justify-center hover:scale-110 border hover:bg-secondary/50 dark:hover:bg-slate-800 rounded-lg col-span-1 cursor-pointer transition duration-300">
            <Image
              alt="Logo"
              src={"/svg/" + tag.logo.dark}
              width={20}
              height={20}
              className="hidden dark:block h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300"
            />
            <Image
              alt="Logo"
              src={"/svg/" + tag.logo.light}
              width={20}
              height={20}
              className="dark:hidden h-8 w-8 group-hover:scale-75 group-hover:-translate-y-2 transition duration-300"
            />
            <p className="absolute -bottom-2 left-0 text-center text-xs hidden group-hover:block group-hover:scale-90 transition duration-300 font-medium w-full">
              {tag.name}
            </p>
          </div>
          {index < tags.length - 1 && (
            <Plus color={"#3b82f6"} className="opacity-50" />
          )}
        </div>
      ))}
    </div>
  );
}
