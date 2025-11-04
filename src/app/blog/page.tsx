import BlogList from "@/components/blog/blog-list";
import Animated from "@/components/framer-motion/animated";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts, sortPosts } from "@/db/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  let posts = getBlogPosts("blog");

  //create a new array sorted by the date, but the first ones being pinned (post.metadata.pinned)
  const sortedPosts = sortPosts(posts).slice(0, 4);

  return (
    <div className="relative w-full flex flex-col items-center pb-10">
      <div className="flex-1 w-full flex flex-col pt-6 min-h-[100dvh] max-w-[600px] lg:max-w-[800px] px-5">
        <AnimatedFirst className="text-3xl font-semibold pb-10">
          Blog
        </AnimatedFirst>
        <BlogList posts={sortedPosts} />
      </div>
    </div>
  );
}
