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

export default function SlugBreadcrumb({
  title,
  slug,
  className,
}: {
  className?: string;
  title: string;
  slug: string;
}) {
  return (
    <Breadcrumb className={cn("overflow-x-hidden", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${title}`}>
            {capitalizeFirstLetter(title)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
