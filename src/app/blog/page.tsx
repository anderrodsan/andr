import BlogList from "@/components/blog/blog-list";
import Animated from "@/components/framer-motion/animated";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts } from "@/db/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  let posts = getBlogPosts("blog");

  return (
    <Section>
      <SideContent className="border-none">
        <></>
      </SideContent>
      <MainContent>
        <AnimatedFirst className="text-3xl font-semibold pb-3 border-b">
          Blog
        </AnimatedFirst>
        <Separator className="mb-3" />
        <BlogList posts={posts} />
      </MainContent>
    </Section>
  );
}
