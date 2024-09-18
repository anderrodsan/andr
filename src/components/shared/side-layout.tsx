import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import AnimatedFirst from "../framer-motion/animated-first";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col md:flex-row items-center md:items-start justify-start gap-5 px-5 md:px-10 lg:px-32 pb-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SideContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatedFirst
      className={cn(
        "hidden md:block sticky md:top-28 md:h-[85dvh] md:w-[260px] md:border-r",
        className
      )}
    >
      <ScrollArea className="h-full w-full pr-10">{children}</ScrollArea>
    </AnimatedFirst>
  );
}

export function MainContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 w-full flex flex-col pt-6 min-h-[100dvh] md:pl-5",
        className
      )}
    >
      {children}
    </div>
  );
}
