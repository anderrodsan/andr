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
import { Framework } from "@/lib/types";
import Animated from "../framer-motion/animated";
import Link from "next/link";
import TechStackCards from "./tech-stack-cards";

export default function TechStack() {
  return (
    <Animated className="relative flex flex-col items-center md:items-start py-10 border-b z">
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
        />
        <TechStackCards data={backend} title="Backend" className="col-span-1" />
        <TechStackCards
          data={languages}
          title="Languages"
          className="col-span-1"
        />
        <TechStackCards data={devops} title="DevOps" className="col-span-1" />
        <TechStackCards data={tools} title="Tools" className="col-span-1" />
      </div>
    </Animated>
  );
}
