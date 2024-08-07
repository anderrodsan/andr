import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import SlugBreadcrumb from "../shared/breadcrumb";
import BreadcrumbSkeleton from "./breadcrumb-skeleton";

export default function SideSkeleton({
  className,
  icon,
}: {
  className?: string;
  icon?: boolean;
}) {
  return (
    <div className={cn("space-y-4 w-full pr-5 pt-2", className)}>
      {/** BreadCrumb */}
      <BreadcrumbSkeleton />
      <div className="space-y-3 hidden md:block pt-2">
        <div className="flex gap-2 items-center overflow-x-hidden">
          {/** Logo */}
          {icon && <Skeleton className="h-8 w-8 rounded-lg bg-secondary" />}

          <Skeleton className="h-4 w-32 bg-secondary" />
        </div>
        {/** Description */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton className="h-3 w-full bg-secondary" />
        ))}
      </div>
    </div>
  );
}
