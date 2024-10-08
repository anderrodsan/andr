import React from "react";
import Animated from "../framer-motion/animated";
import { projects } from "@/db/projects";
import Counter from "../animata/text/counter";
import { Plus } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      name: "Projects",
      value: projects.length,
      plus: false,
    },
    {
      name: "Hours",
      value: 600,
      plus: true,
    },
  ];

  return (
    <Animated className="flex flex-col items-center md:items-start py-10 border-b">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 w-full">
        {/** Tech Stack Icons */}
        {experience.map((exp: any, index: number) => (
          <div
            key={index}
            className="relative w-32 px-3 py-3 space-y-1 rounded-lg border"
          >
            <p className="text-sm opacity-70">{exp.name}</p>
            <div className="flex gap items-center">
              <p className="text-3xl font-medium opacity-80">
                {exp.plus && <Plus size={25} />}
              </p>
              <Counter
                targetValue={exp.value}
                className="text-3xl font-medium"
              />
            </div>
          </div>
        ))}
      </div>
    </Animated>
  );
}
