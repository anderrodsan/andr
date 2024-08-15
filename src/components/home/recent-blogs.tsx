import React from "react";
import SectionHeader from "./section-header";
import Animated from "../framer-motion/animated";
import { getBlogPosts } from "@/db/blog";
import BlogList from "../blog/blog-list";

export default function RecentBlogs() {
  //take only the first 4 posts
  let posts = getBlogPosts("blog");

  //create a new array sorted by the date, but the first ones being pinned (post.metadata.pinned)
  const sortedPosts = posts
    .filter((post: any) => post.metadata.pinned === "true")
    .concat(
      posts
        .sort(
          (a: any, b: any) =>
            new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt)
        )
        .filter((post: any) => post.metadata.pinned === "false")
    )
    .slice(0, 4);

  return (
    <Animated className="flex flex-col items-center gap-5 md:items-start py-10 border-b w-full">
      <SectionHeader
        title="Recent Blogs"
        text="A list of articles I've written."
        path="blog"
      />
      <BlogList
        posts={sortedPosts}
        className="w-4/5 sm:w-[60%] md:w-full items-center"
      />
    </Animated>
  );
}
