import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/lib/types";
import { Button } from "../ui/button";
import Image from "next/image";
import Noise from "./noise";
import { AnyCnameRecord } from "dns";
import AnimatedFirst from "../framer-motion/animated-first";
import Animated from "../framer-motion/animated";

export default function ShareCard({ children }: { children: React.ReactNode }) {
  const frameworks = [
    {
      name: "NextJS",
      link: "https://nextjs.org/",
      logo: {
        light: "nextjs.svg",
        dark: "nextjs-dark.svg",
      },

      //count how many project tag includes this framework
    },
    {
      name: "Expo",
      link: "https://expo.dev/",
      logo: {
        light: "expo.svg",
        dark: "expo-dark.svg",
      },
    },
    {
      name: "TailwindCSS",
      link: "https://tailwindcss.com/",
      logo: {
        light: "tailwind.svg",
        dark: "tailwind.svg",
      },
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      logo: {
        light: "typescript.svg",
        dark: "typescript.svg",
      },
    },
    {
      name: "React",
      link: "https://react.dev/",
      logo: {
        light: "react.svg",
        dark: "react.svg",
      },
    },
    {
      name: "Supabase",
      link: "https://supabase.com/",
      logo: {
        light: "supabase.svg",
        dark: "supabase.svg",
      },
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[90%] sm:w-auto px-10 py-10 rounded-3xl overflow-hidden">
        <div className="z-0 absolute inset-0 h-[100%] w-[100%] bg-gradient-to-br from-slate-50 via-slate-400/60 to-slate-200 dark:from-slate-600 dark:via-slate-900 dark:to-slate-700 animate-gradient" />
        <Noise className="scale-[2] opacity-10" />
        <AnimatedFirst className="z-20 px-5">
          <p className="text-3xl font-bold">Ander</p>
          <p className="text-3xl font-bold -mt-1">Rodriguez</p>
          <p className="text-lg pt-1">Software Developer</p>
        </AnimatedFirst>
        <AnimatedFirst className="z-20 flex gap-4 justify-between items-center pt-2 pb-5 px-5">
          {frameworks.map((framework) => (
            <a
              key={framework.name}
              href={framework.link}
              className="flex items-center gap-2"
            >
              <Image
                src={`/svg/${framework.logo.dark}`}
                alt={framework.name}
                width={25}
                height={25}
                className="hidden dark:block"
              />
              <Image
                src={`/svg/${framework.logo.light}`}
                alt={framework.name}
                width={25}
                height={25}
                className="dark:hidden"
              />
            </a>
          ))}
        </AnimatedFirst>
        <Animated className="relative h-[300px] aspect-auto mb-4">
          <Image
            src="/images/QR.png"
            alt="QR Code"
            fill
            style={{ objectFit: "contain" }}
            className=""
          />
        </Animated>
      </DialogContent>
    </Dialog>
  );
}
