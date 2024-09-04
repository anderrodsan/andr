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

export default function Hero() {
  return (
    <Animated className="relative flex flex-col items-center gap-7 py-32 w-full bbg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-xl mt-5 md:mt-0">
      <div className="flex items-center justify-center gap-1 z-10">
        <p className="text-2xl sm:text-3xl font-medium">👋 Hey, I'm</p>
        <div className="group cursor-pointer relative">
          <p className="text-2xl md:text-3xl font-medium group-hover:text-blue-600 transition duration-300 z-10">
            Ander!
          </p>
          <div className="scale-0 group-hover:scale-100 transition-all absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20%] group-hover:-translate-y-[110%] opacity-0 group-hover:opacity-100">
            <Avatar className="h-24 w-24 animate-move">
              <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQHvSeGCGtamnA/profile-displayphoto-shrink_800_800/0/1614983373888?e=1726704000&v=beta&t=jU_n-rMa9zSG8QmBVV-cprdecn6ClYxAJRjBGykNq58" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <h1 className="text-4xl sm:text-6xl font-semibold max-w-[65ch] text-center">
        Building{" "}
        <span className="relative group ">
          <p className="bg-gradient-to-b from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text group-hover:opacity-80 transition-all">
            websites
          </p>
          <Image
            alt="wordwise"
            src="/projects/dormhive-dash/cover.png"
            width={100}
            height={100}
            className="hidden md:block absolute -bottom-0 right-0 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[20%] rotate-[25deg] group-hover:rotate-0 transition duration-500 rounded-xl z-20 shadow-xl"
          />
          <Image
            alt="wordwise"
            src="/projects/youmap/cover.png"
            width={100}
            height={100}
            className="hidden md:block absolute -bottom-0 right-0  opacity-0 group-hover:opacity-100 -translate-y-[20%] group-hover:-translate-y-[10%] translate-x-[50%] group-hover:translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-500 delay-200 rounded-xl z-20 shadow-xl"
          />
        </span>
        <br></br> and{" "}
        <span className="relative group ">
          <p className="bg-gradient-to-b from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text group-hover:opacity-80 transition-all">
            native apps.
          </p>
          <Image
            alt="wordwise"
            src="/projects/dormhive-app/cover.png"
            width={100}
            height={100}
            className="hidden md:block absolute -bottom-0 right-0 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[20%] rotate-[25deg] group-hover:rotate-0 transition duration-300 rounded-xl z-20 shadow-xl"
          />
          <Image
            alt="wordwise"
            src="/projects/wordwise/cover.png"
            width={100}
            height={100}
            className="hidden md:block absolute -bottom-0 right-0 opacity-0 group-hover:opacity-100 translate-y-[20%] group-hover:-translate-y-[10%] translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-300 delay-200 rounded-xl z-20 shadow-xl"
          />
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
        className="absolute bottom-10 flex flex-col items-center text-sm opacity-30 hover:opacity-80 transition duration-300"
      >
        <ChevronDown size={30} className="animate-bounce m-5" />
      </Link>

      <div id="tech" />
    </Animated>
  );
}
