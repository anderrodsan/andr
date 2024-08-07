import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import BreadcrumbSkeleton from "@/components/skeleton/breadcrumb-skeleton";
import PostHeaderSkeleton from "@/components/skeleton/post-header-skeleton";
import SideSkeleton from "@/components/skeleton/side-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <Section>
      <SideContent>
        <SideSkeleton />
      </SideContent>
      <MainContent className="max-w-[650px]">
        <BreadcrumbSkeleton className="md:hidden" />
        <PostHeaderSkeleton className={"pt-2"} />
        {/** Description */}
        <div className="space-y-3 py-14">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton className="h-3 w-full bg-secondary" />
          ))}
        </div>
        <Skeleton className="h-[350px] w-full rounded-lg bg-secondary" />
      </MainContent>
    </Section>
  );
}
