import React from "react";
import Animated from "../framer-motion/animated";

export default function Experience() {
  const experience = [
    {
      name: "Years",
      value: 1,
      plus: true,
    },
    {
      name: "Projects",
      value: 5,
      plus: false,
    },
    {
      name: "Startups",
      value: 1,
      plus: false,
    },
    {
      name: "Hours",
      value: 120,
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
            className="relative w-32 px-3 py-3 space-y-1 rounded-lg hover:scale-110 border hover:bg-secondary/50 dark:hover:bg-slate-800 transition duration-300"
          >
            <p className="text-sm opacity-70">{exp.name}</p>
            <p className="text-3xl font-medium opacity-80">
              {exp.plus ? "+ " : ""}
              {exp.value}
            </p>
          </div>
        ))}
      </div>
    </Animated>
  );
}
