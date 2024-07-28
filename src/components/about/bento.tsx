import React from "react";
import Animated from "../framer-motion/animated";
import { projects } from "@/db/projects";
import { Cake, LanguagesIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Bento() {
  const attributes = [
    {
      title: "Age",
      value: "25 Years",
      icon: Cake,
    },
    {
      title: "From",
      value: "Basque Country, Spain",
      icon: MapPin,
    },
  ];

  return (
    <Animated className="flex flex-col items-center md:items-start pb-10 border-b">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {attributes.map((item: any, index: number) => (
          <div
            key={index}
            className={"relative w-full px-3 py-3 space-y-1 rounded-lg border"}
          >
            <div className="flex gap-2 items-center">
              <item.icon size={18} />
              <p className="text-sm opacity-70">{item.title}</p>
            </div>
            <p className="font-medium opacity-80">{item.value}</p>
          </div>
        ))}
        <Map />
        <Languages />
      </div>
    </Animated>
  );
}

const Map = () => {
  return (
    <Link
      target="_blank"
      href="https://www.google.com/maps/place/Copenhaguen,+Dinamarca/@55.6712398,12.5114238,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?entry=ttu"
      className="h-40 md:h-full col-span-2 md:col-span-1 md:row-span-2"
    >
      {" "}
      <div className="relative group w-full h-full bg-secondary rounded-lg overflow-hidden cursor-pointer">
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
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-blue-500 shadow-lg shadow-blue-800 group-hover:scale-[2.2] transition duration-700 opacity-50" />
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white shadow-md shadow-blue-500" />
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500" />
        </div>

        <p className="absolute bottom-2 left-2 p-2 rounded-lg bg-white dark:bg-black text-xs font-medium shadow shadow-slate-300">
          Copenhagen, Denmark
        </p>
      </div>
    </Link>
  );
};

const Languages = () => {
  const languages = [
    {
      name: "Spanish",
      level: "Native",
    },
    {
      name: "Basque",
      level: "Native",
    },
    {
      name: "English",
      level: "Fluent",
    },

    {
      name: "Danish",
      level: "Intermediate",
    },
    {
      name: "French",
      level: "Advanced",
    },
  ];
  return (
    <div
      className={
        "relative col-span-2 w-full px-3 py-3 space-y-3 rounded-lg border"
      }
    >
      <div className="flex gap-2 items-center">
        <LanguagesIcon size={18} />
        <p className="text-sm opacity-70">Languages</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
        {languages.map((item: any, index: number) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            <p className="font-medium opacity-80">{item.name}</p>
            <p className="text-sm opacity-70">{item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};