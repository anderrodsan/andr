import React from "react";
import Animated from "../framer-motion/animated";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

type Props = {
  posts: any;
  className?: string;
};
export default function BlogList({ posts, className }: Props) {
  return (
    <Animated className={className}>
      {posts ? (
        <ul className="flex flex-col gap-5 w-full">
          {posts.map((post: any, index: number) => (
            <Link
              href={`/blog/${post.slug}`}
              className="group cursor-pointer border rounded-xl p-3 hover:bg-muted w-full space-y-1"
              key={index}
            >
              <h1 className="text-lg font-medium">{post.metadata.title}</h1>
              <p className="text-sm opacity-90 line-clamp-1">
                {post.metadata.summary}
              </p>
              <p className="text-sm opacity-70">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </Link>
          ))}
        </ul>
      ) : (
        <h1>No posts yet</h1>
      )}
    </Animated>
  );
}
