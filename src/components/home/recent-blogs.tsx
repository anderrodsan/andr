import React from "react";
import SectionHeader from "./section-header";
import Animated from "../framer-motion/animated";
import { getBlogPosts } from "@/db/blog";
import BlogList from "../blog/blog-list";

export default function RecentBlogs() {
  let posts = getBlogPosts("blog");

  return (
    <Animated className="flex flex-col items-center gap-5 md:items-start py-10 border-b w-full">
      <SectionHeader
        title="Recent Blogs"
        text="A list of articles I've written."
        path="blog"
      />
      <BlogList posts={posts} className="w-full" />
    </Animated>
  );
}
