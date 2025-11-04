import React from "react";
import Image from "next/image";
import {
  backend,
  devops,
  frameworks,
  frontend,
  languages,
  tools,
} from "@/db/frameworks";
import Animated from "../framer-motion/animated";
import TechStackCards from "./tech-stack-cards";

export default function TechStack() {
  return (
    <Animated className="relative flex flex-col items-center md:items-start">
      <div className="absolute -top-20 left-0" id="tech-stack" />
      <h1 className="text-2xl md:text-3xl font-semibold">Tech Stack</h1>
      <p className="opacity-70 text-sm pt-1 pb-5">
        Some of the technologies I&apos;ve worked with.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <TechStackCards
          data={frontend}
          title="Frontend"
          className="col-span-2"
          delay={0.2}
          direction="right"
        />
        <TechStackCards
          data={backend}
          title="Backend"
          className="col-span-1"
          delay={0.2}
          direction="left"
        />
        <TechStackCards
          data={languages}
          title="Languages"
          className="col-span-1"
          delay={0.2}
        />
        <TechStackCards
          data={devops}
          title="DevOps"
          className="col-span-1"
          delay={0.3}
        />
        <TechStackCards
          data={tools}
          title="Tools"
          className="col-span-1"
          delay={0.4}
        />
      </div>
    </Animated>
  );
}
