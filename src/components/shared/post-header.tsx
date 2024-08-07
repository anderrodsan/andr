import { formatDate } from "@/lib/utils";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PostHeader({
  post,
  author,
  className,
}: {
  post: any;
  author: any;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <h1 className="font-semibold text-3xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <p className="text-sm opacity-80">
        {formatDate(post.metadata.publishedAt)}
      </p>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={author?.avatar} />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <p className="text-sm opacity-80">{author?.name}</p>
        <div className="flex items-center space-x-2">
          <Link
            href={author?.github ?? ""}
            className="group p-2 rounded-xl bg-secondary hover:opacity-100 opacity-70 transition-all"
          >
            <IoLogoGithub size={18} className="group-hover:scale-110" />
          </Link>
          <Link
            href={author?.linkedin ?? ""}
            className="group p-2 rounded-xl bg-secondary hover:opacity-100 opacity-70 transition-all"
          >
            <IoLogoLinkedin size={18} className="group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
}
