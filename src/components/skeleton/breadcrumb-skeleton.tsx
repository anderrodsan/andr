"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export default function BreadcrumbSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <Breadcrumb className={cn("overflow-x-hidden", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Skeleton className="h-4 w-20 bg-secondary" />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Skeleton className="h-4 w-20 bg-secondary" />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
