"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MapTooltip() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Copenhaguen,+Dinamarca/@55.6712398,12.5114238,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?entry=ttu"
            className="flex items-center space-x-2 py-2 cursor-pointer hover:underline opacity-80 hover:opacity-100"
          >
            <MapPin size={20} />
            <h1 className="font-semibold text-sm">Copenhagen, Denmark</h1>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="w-60 rounded-xl p-1"
          align="start"
          sideOffset={0}
        >
          {/** Map */}
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Copenhaguen,+Dinamarca/@55.6712398,12.5114238,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?entry=ttu"
          >
            {" "}
            <div className="relative group w-full h-28 bg-secondary rounded-lg overflow-hidden cursor-pointer z-40">
              <Image
                src={"/images/map-cph.png"}
                alt="Map"
                fill
                sizes="100vh"
                //cover and place image in center
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="group-hover:scale-110 transition duration-300"
              />
              {/** Dot on the map */}
              <div className="group-hover:-translate-y-2 transition duration-300">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-blue-500 shadow-lg shadow-blue-800 group-hover:scale-[2.2] transition duration-700 opacity-50" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white shadow-md shadow-blue-500" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500" />
              </div>

              <p className="absolute bottom-2 left-2 p-2 rounded-lg bg-white dark:bg-black text-xs font-medium shadow shadow-slate-300">
                Copenhagen, Denmark
              </p>
            </div>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
