//from Lee Rob: https://codesandbox.io/p/devbox/leerob-leerob-io-jgf99?file=%2Fapp%2Fblog%2F%5Bslug%5D%2Fpage.tsx%3A124%2C16

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/db/blog";
import { CustomMDX } from "@/components/mdx/mdx";
import ProjectSideInfo from "@/components/projects/project-info";
import { projects } from "@/db/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { users } from "@/db/users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { formatDate } from "@/lib/format-date";
import AnimatedFirst from "@/components/framer-motion/animated-first";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  //get the post content from the params
  let post = getBlogPosts("project").find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://andrs.vercel.app/project/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

//static params
export async function generateStaticParams() {
  return getBlogPosts("project").map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({ params }) {
  let post = getBlogPosts("project").find((post) => post.slug === params.slug);

  //find the project with the same title as the prop
  const project = projects?.find((project) => project.id === params.slug);
  //find the project authors in users.ts
  const author = users?.find((user) => user.username === project?.author);

  if (!post) {
    notFound();
  }

  return (
    <section className="relative w-full flex flex-col md:flex-row gap-5 pt-5 px-5 md:px-10 lg:px-32">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            url: `https://andrs.vercel.app/project/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ander Rodriguez",
            },
          }),
        }}
      />
      <aside className="relative w-60 border-r pr-5 pt-2">
        <ProjectSideInfo project={project} post={post} author={author} />
      </aside>
      <AnimatedFirst className="flex-1">
        <div className="flex flex-col md:flex-row justify-between gap-3 py-2 border-b pb-5 max-w-[650px]">
          <div className="space-y-2">
            <h1 className="font-semibold text-3xl tracking-tighter max-w-[650px] whitespace-nowrap">
              {post.metadata.title}
            </h1>
            <p className="text-sm opacity-80">
              {formatDate(post.metadata.publishedAt)}
            </p>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={author?.avatar} />
                <AvatarFallback>CN</AvatarFallback>
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
          <Link href={project?.link.href ?? ""} target="_blank">
            <Button
              size={"sm"}
              variant={"secondary"}
              className="flex items-center space-x-2"
            >
              <ExternalLink size={18} />
              <p className="text-sm">{project?.link.text}</p>
            </Button>
          </Link>
        </div>
        <article className="prose prose-quoteless prose-neutral dark:prose-invert pb-20 pt-3">
          <CustomMDX source={post.content} />
        </article>
      </AnimatedFirst>
    </section>
  );
}
