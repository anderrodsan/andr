"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiJavascriptLine,
} from "react-icons/ri";
import { SiExpo, SiTypescript, SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { Globe, Monitor, MonitorSmartphone, Smartphone } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ProjectSearch from "./project-search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { frameworks } from "@/data/frameworks";
import { Projects } from "@/lib/types/types";

export default function ProjectFilters({ projects }: { projects: Projects }) {
  const devices = [
    /*
    {
      name: "All",
      logo: <MonitorSmartphone size={20} />,
      count: projects?.length,
    },
    */
    {
      name: "Mobile App",
      logo: <Smartphone size={20} />,
    },
    {
      name: "Website",
      logo: <Globe size={20} />,
    },
  ];

  const [filters, setFilters] = useState<any>([]);

  const pathname = usePathname();

  const searchParams = useSearchParams()!;
  const router = useRouter();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

  //read the filters searchparams and add/remove it from the query
  const handleQuery = (name: string, value: string) => {
    if (filters.includes(value)) {
      const newFilters = filters.filter((filter: any) => filter !== value);
      router.replace(
        `${pathname}?${createQueryString(name, newFilters.toString())}`
      );
      setFilters(newFilters);
    } else {
      const newFilters = [...filters, value];
      router.replace(
        `${pathname}?${createQueryString(name, newFilters.toString())}`
      );
      setFilters(newFilters);
    }
  };

  const removeQuery = (name: string, value: string) => {
    const newFilters = filters.filter((filter: any) => filter !== value);
    router.replace(
      `${pathname}?${createQueryString(name, newFilters.toString())}`
    );
    setFilters(newFilters);
  };

  //detect theme
  const { theme } = useTheme();

  return (
    <ScrollArea className="h-full pr-5 w-60">
      <p className={`text-lg font-bold`}>Filters</p>
      <div className="w-full hidden md:block pt-2">
        <ProjectSearch projects={projects} />
      </div>

      {/** Devices */}
      <p className="font-semibold pt-5 md:pt-0 pb-2 whitespace-nowrap">
        Platform
      </p>
      <div className="flex flex-col gap-2 pb-3 border-b">
        {devices.map((device, index) => (
          <div
            key={index}
            className={`flex gap-2 justify-between items-center hover:bg-secondary cursor-pointer rounded-lg py-1 px-2 ${
              filters.includes(device.name) && "bg-secondary"
            }`}
            onClick={() => {
              handleQuery("filter", device.name);
              //remove the other device from the query
            }}
          >
            {device.logo}
            <p className="flex-1 text-sm opacity-80">{device.name}</p>
            <p className="text-sm text-primary opacity-50">
              {device.name === "All"
                ? projects?.length
                : projects?.filter((project: any) =>
                    project?.tags.includes(device.name)
                  ).length}
            </p>
          </div>
        ))}
      </div>

      {/* Frameworks */}
      <div className="pt-3">
        <p className="font-semibold pb-2 whitespace-nowrap">Frameworks</p>
        <div className="flex flex-col gap-2">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className={`flex gap-2 justify-between items-center hover:bg-secondary cursor-pointer rounded-lg py-1 px-2 ${
                filters.includes(framework.name) && "bg-secondary"
              }`}
              onClick={() => {
                handleQuery("filter", framework.name);
              }}
            >
              <Image
                alt="Logo"
                src={
                  "/svg/" +
                  (theme === "dark"
                    ? framework.logo.dark
                    : framework.logo.light)
                }
                width={20}
                height={20}
                className="h-5 w-5 rounded-sm"
              />
              <p className="flex-1 text-sm opacity-80">{framework.name}</p>
              <p className="text-sm text-primary opacity-50">
                {
                  projects?.filter((project: any) =>
                    project?.tags.includes(framework.name)
                  ).length
                }
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10" />
      <ScrollBar orientation="vertical" className="hidden" />
    </ScrollArea>
  );
}
