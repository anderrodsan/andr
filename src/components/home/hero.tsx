import React from "react";
import TextFlip from "../animata/text/text-flip";
import BookMeeting from "../shared/book-meeting";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Animated from "../framer-motion/animated";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ParalaxItem from "../framer-motion/paralax";
import ButtonTooltip from "../shared/button-tooltip";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../framer-motion/motion-div";

export default function Hero() {
  return (
    <Animated className="relative flex flex-col items-center gap-7 py-20 md:py-32 w-full bbg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-xl mt-5 md:mt-0">
      <div className="flex items-center justify-center gap-1 z-10">
        <p className="text-2xl sm:text-3xl font-medium">👋 Hey, I'm</p>
        <Link href={"/about"} className="group cursor-pointer relative">
          <p className="text-2xl md:text-3xl font-medium group-hover:text-blue-600 transition duration-300 z-10">
            Ander!
          </p>
          <div className="hidden md:block scale-0 group-hover:scale-100 transition-all absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20%] group-hover:-translate-y-[110%] opacity-0 group-hover:opacity-100">
            <Avatar className="h-24 w-24 animate-move">
              <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQHvSeGCGtamnA/profile-displayphoto-shrink_800_800/0/1614983373888?e=1726704000&v=beta&t=jU_n-rMa9zSG8QmBVV-cprdecn6ClYxAJRjBGykNq58" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </div>
        </Link>
      </div>
      <h1 className="text-4xl sm:text-6xl font-semibold max-w-[65ch] text-center">
        Building{" "}
        <span className="relative group ">
          <Link href={"/projects?filter=Website"} className="cursor-pointer">
            <p className="bg-gradient-to-b from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text group-hover:opacity-80 transition-all">
              websites
            </p>

            <Image
              alt="wordwise"
              src="/projects/dormhive-dash/cover.png"
              width={100}
              height={100}
              className="hidden md:block absolute -bottom-0 right-0 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[20%] rotate-[25deg] group-hover:rotate-0 transition duration-500 rounded-xl z-10 shadow-xl"
            />
            <Image
              alt="wordwise"
              src="/projects/youmap/cover.png"
              width={100}
              height={100}
              className="hidden md:block absolute -bottom-0 right-0  opacity-0 group-hover:opacity-100 -translate-y-[20%] group-hover:-translate-y-[10%] translate-x-[50%] group-hover:translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-500 delay-200 rounded-xl z-10 shadow-xl"
            />
          </Link>
        </span>
        <br></br> and{" "}
        <span className="relative group ">
          <Link href={"/projects?filter=Mobile+App"} className="cursor-pointer">
            <p className="bg-gradient-to-b from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text group-hover:opacity-80 transition-all">
              native apps.
            </p>
            <Image
              alt="wordwise"
              src="/projects/dormhive-app/cover.png"
              width={100}
              height={100}
              className="hidden md:block absolute -bottom-0 right-0 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[20%] rotate-[25deg] group-hover:rotate-0 transition duration-300 rounded-xl z-10 shadow-xl"
            />
            <Image
              alt="wordwise"
              src="/projects/wordwise/cover.png"
              width={100}
              height={100}
              className="hidden md:block absolute -bottom-0 right-0 opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[10%] translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-300 delay-200 rounded-xl z-10 shadow-xl"
            />
          </Link>
        </span>
      </h1>
      <p
        className="text-sm md:text-base text-center opacity-90 max-w-[65ch]"
        style={{ lineHeight: 2.2 }}
      >
        I'm a{" "}
        <span className="bg-muted text-primary font-medium border-2 rounded-full px-2 py-1 whitespace-nowrap">
          full-stack developer
        </span>{" "}
        mainly focused on{" "}
        <span className="bg-muted text-primary font-medium border-2 rounded-full px-2 py-1 whitespace-nowrap">
          frontend
        </span>
        {". "}I can fastly turn any idea into an awesome and responsive{" "}
        <span className="bg-muted text-primary font-medium border-2 rounded-full px-2 py-1 whitespace-nowrap">
          website
        </span>{" "}
        or{" "}
        <span className="bg-muted text-primary font-medium border-2 rounded-full px-2 py-1 whitespace-nowrap">
          native app
        </span>
        .
      </p>
      <BookMeeting
        title="Hire Me"
        className="font-bold bg-primary h-10 w-32 hover:scale-110 transition duration-300 mt-5"
      />
      <Link
        href="#tech"
        className="absolute bottom-5 md:bottom-10 flex flex-col items-center text-sm opacity-30 hover:opacity-80 transition duration-300"
      >
        <ChevronDown size={30} className="animate-bounce m-5" />
      </Link>

      <FloatingIcons className="m-5" />

      <div id="tech" />
    </Animated>
  );
}

const FloatingIcons = ({ className }: { className?: string }) => {
  const icons = [
    {
      svg: {
        light: "expo",
        dark: "expo-dark",
      },
      position: "top-6 md:top-20 md:left-10 left-2",
      speed: 200,
    },
    {
      svg: {
        light: "nextjs",
        dark: "nextjs-dark",
      },
      position: "top-8 md:top-32 right-3 md:-right-20",
      speed: -200,
    },
    {
      svg: {
        light: "supabase",
        dark: "supabase",
      },
      position: "top-4 md:top-10 right-1/2 md:right-[20%]",
      speed: 500,
    },
    {
      svg: {
        light: "react",
        dark: "react",
      },
      position: "bottom-36 left-3",
      speed: -900,
    },
    {
      svg: {
        light: "tailwind",
        dark: "tailwind",
      },
      position: "bottom-32 md:bottom-48 right-7",
      speed: -700,
    },
  ];
  return (
    <>
      {icons.map((icon, index) => (
        <ParalaxItem
          key={index}
          speed={icon.speed}
          className={cn("absolute", icon.position)}
        >
          <ButtonTooltip title={icon.svg.light}>
            <MotionDiv
              initial={{ opacity: 0.2, y: 50 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
              }}
              className="hover:opacity-100"
            >
              <Image
                alt="icon"
                src={"/svg/" + icon.svg.light + ".svg"}
                width={100}
                height={100}
                className={
                  "w-8 md:w-10 animate-move-md dark:hidden hover:scale-110 transition-all"
                }
                style={{
                  animationDelay: `${index * 400}ms`, // add a delay to each icon
                }}
              />
              <Image
                alt="icon"
                src={"/svg/" + icon.svg.dark + ".svg"}
                width={100}
                height={100}
                className={
                  "w-8 md:w-10 animate-move-md hidden dark:block hover:scale-110 transition-all"
                }
                style={{
                  animationDelay: `${index * 400}ms`, // add a delay to each icon
                }}
              />
            </MotionDiv>
          </ButtonTooltip>
        </ParalaxItem>
      ))}
    </>
  );
};
