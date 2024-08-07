import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import SlugBreadcrumb from "../shared/breadcrumb";

export default function ProjectSideInfo({ project, post, author }: any) {
  return (
    <aside className="w-full space-y-5">
      <SlugBreadcrumb title="projects" slug={post.slug} />
      <div className="space-y-3 hidden md:block">
        <div className="flex gap-2 items-center overflow-x-hidden">
          {/** Logo */}
          <Image
            alt="Logo"
            src={project?.logo}
            width={100}
            height={100}
            className="h-8 w-8 rounded-lg"
          />
          <p className="text-lg font-bold opacity-90 whitespace-nowrap line-clamp-1">
            {project?.title}
          </p>
        </div>
        <p className="text-sm pb-3 opacity-80">{project?.description}</p>
        <Link href={project?.link.href ?? ""} target="_blank">
          <Button
            size={"sm"}
            variant={"secondary"}
            className="w-full flex items-center space-x-2"
          >
            <ExternalLink size={16} />
            <p className="text-xs">{project?.link.text}</p>
          </Button>
        </Link>
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
