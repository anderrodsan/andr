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
    <Section className="w-full pr-0 md:pr-0 lg:pr-0 mx-auto max-w-[1500px]">
      <SideContent>
        <SideSkeleton icon={true} />
      </SideContent>
      <MainContent className="flex-1 w-full flex flex-col pt-6 min-h-[100dvh] md:pl-5 max-w-[650px]">
        <BreadcrumbSkeleton className="md:hidden pb-2" />
        <PostHeaderSkeleton className={"pt-2"} />
        {/** Description */}
        <div className="space-y-3 py-14">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton className="h-3 w-full bg-secondary" key={i} />
          ))}
        </div>
        <Skeleton className="h-[350px] w-full rounded-lg bg-secondary" />
      </MainContent>
    </Section>
  );
}
