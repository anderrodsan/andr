import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ButtonTooltip({
  children,
  title,
  side,
  delay,
}: {
  children: React.ReactNode;
  title: string;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
}) {
  return (
    <TooltipProvider delayDuration={delay ? delay : 0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side && side} className="bg-background">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
