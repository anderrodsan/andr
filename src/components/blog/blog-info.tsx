"use client";

import React from "react";
import { renderToString } from "react-dom/server";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import SlugBreadcrumb from "../shared/breadcrumb";

export default function BlogSideInfo({ post, author }: any) {
  return (
    <aside className="w-full space-y-5">
      <SlugBreadcrumb title="blog" slug={post.slug} />
      {/** Logo with the title and description below */}
      <div className="space-y-1 hidden md:block">
        <div className="flex gap-2 items-center overflow-x-hidden">
          <p className="text-lg font-bold opacity-90">{post.metadata.title}</p>
        </div>
        <p className="text-sm pb-3 opacity-80">{post.metadata.summary}</p>
      </div>
      <div className="pb-5 w-full hidden md:block">
        <h1 className="font-semibold text-sm border-b pb-2 mb-1">Author</h1>
        <div className="flex items-center gap-2 py-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author?.avatar} />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{author?.name}</p>
        </div>

        <Link target="_blank" href={author?.github ?? ""}>
          <div className="flex items-center gap-2 py-2 hover:underline">
            <IoLogoGithub size={20} />
            <p className="flex-1 text-sm opacity-80 line.clamp-1">
              github.com/{author?.username}
            </p>
          </div>
        </Link>
        <Link target="_blank" href={author?.github ?? ""}>
          <div className="flex items-center gap-2 py-2 hover:underline">
            <IoLogoLinkedin size={20} />
            <p className="flex-1 text-sm opacity-80 line-clamp-1">
              linkedin.com/in/{author?.username}
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
