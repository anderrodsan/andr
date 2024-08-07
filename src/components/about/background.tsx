import React from "react";
import Image from "next/image";
import { frameworks } from "@/db/frameworks";
import { Experience, Framework } from "@/lib/types";
import AnimatedFirst from "../framer-motion/animated-first";
import Link from "next/link";
import { experience } from "@/db/experience";
import { BriefcaseBusiness, ExternalLink, GraduationCap } from "lucide-react";
import Animated from "../framer-motion/animated";

export default function Background() {
  return (
    <Animated className="flex flex-col items-center md:items-start py-10 border-b">
      <h1 className="text-2xl md:text-3xl font-semibold">Background</h1>
      <p className="opacity-70 text-sm pt-1 pb-5"></p>
      {/** Education & Job blocks */}
      <div className="flex flex-col space-y-3 ml-5 border-l-2">
        {experience.map((exp: Experience, index: number) => (
          <div className={`relative space-y-2 w-full pl-10`} key={index}>
            <div className="text-sm opacity-90 pt-2">{exp.date}</div>
            <div className="w-full flex flex-col items-center md:items-start p-3 rounded-xl border hover:bg-secondary/40 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition duration-300 group">
              <Link
                href={exp.link}
                target="_blank"
                className="flex items-start justify-between gap-3 w-full"
              >
                <Image
                  alt="Logo"
                  src={exp.logo}
                  height={100}
                  width={100}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="cursor-pointer h-12 w-12 rounded-xl bg-slate-50 p-1"
                />
                <div className="flex-1">
                  <h1 className="font-semibold text-sm md:text-base">
                    {exp.title}
                  </h1>
                  <h2 className="text-sm opacity-90">{exp.company}</h2>
                  <Link
                    href={"https://www.google.com/maps/search/" + exp.city + ""}
                    target="_blank"
                    className="opacity-70 text-xs pt-1 hover:underline"
                  >
                    {exp.city}
                  </Link>
                </div>
                <ExternalLink
                  size={18}
                  className="opacity-0 group-hover:opacity-50 transition ease-in-out duration-300"
                />
              </Link>
            </div>
            <div className="">
              <div className="absolute top-0 -left-5 w-10 h-10 flex justify-center items-center rounded-full bg-secondary">
                {exp.type ? (
                  <BriefcaseBusiness size={18} />
                ) : (
                  <GraduationCap size={20} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Animated>
  );
}
