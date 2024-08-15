import React from "react";
import Animated from "../framer-motion/animated";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { Pin } from "lucide-react";

type Props = {
  posts: any;
  className?: string;
};
export default function BlogList({ posts, className }: Props) {
  return (
    <Animated className="flex flex-col items-center">
      {posts ? (
        <div className={cn("flex flex-col gap-5 w-full", className)}>
          {posts.map((post: any, index: number) => (
            <Link
              href={`/blog/${post.slug}`}
              className="group cursor-pointer md:w-full flex flex-col md:flex-row gap-2 md:gap-5"
              key={index}
            >
              <div className="relative w-full md:w-[130px] rounded-xl overflow-hidden border bg-slate-800">
                <Image
                  alt="opengraph image"
                  src={"/og?title=" + post.metadata.title}
                  width={100}
                  height={100}
                  sizes="100vh"
                  style={{ objectFit: "contain" }}
                  className="w-full h-full group-hover:scale-105 group-hover:translate-x-2 group-hover:opacity-90 md:group-hover:translate-x-0 transition duration-300"
                />
              </div>
              <div className="flex-1">
                <div className="flex gap-2 flex-wrap items-center">
                  <h1 className="text-lg font-medium group-hover:">
                    {post.metadata.title}
                  </h1>
                  {post.metadata?.pinned === "true" && (
                    <Pin size={16} fill="gray" className="opacity-70" />
                  )}
                </div>

                <p className="text-sm opacity-90 line-clamp-1">
                  {post.metadata.summary}
                </p>
                <p className="text-sm opacity-70">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1>No posts yet</h1>
      )}
    </Animated>
  );
}
