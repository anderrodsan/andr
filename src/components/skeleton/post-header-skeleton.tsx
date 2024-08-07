import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export default function PostHeaderSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("space-y-4 pb-5 border-b", className)}>
      <Skeleton className="h-7 w-60 bg-secondary" />
      <Skeleton className="h-4 w-32 bg-secondary" />
      <div className="flex items-center gap-2">
        <Skeleton className="w-6 h-6 rounded-full bg-secondary" />
        <Skeleton className="h-3 w-20 bg-secondary" />
        <div className="flex items-center space-x-2"></div>
      </div>
    </div>
  );
}
