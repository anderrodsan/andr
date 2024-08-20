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
import AnimatedFirst from "@/components/framer-motion/animated-first";
import PostHeader from "@/components/shared/post-header";
import { Section, SideContent } from "@/components/shared/side-layout";
import { Suspense } from "react";
import PostHeaderSkeleton from "@/components/skeleton/post-header-skeleton";
import SlugBreadcrumb from "@/components/shared/breadcrumb";

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
  } = post.metadata;
  const ogImage = `https://andrs.vercel.app/projects/${post.slug}/cover.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://andrs.vercel.app/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

//static params
export async function generateStaticParams() {
  return getBlogPosts("project").map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts("project").find((post) => post.slug === params.slug);

  //find the project with the same title as the prop
  const project = projects?.find((project) => project.id === params.slug);
  //find the project authors in users.ts
  const author = users?.find((user) => user.username === project?.author);

  if (!post) {
    notFound();
  }

  return (
    <Section>
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
            image: post.metadata.image,
            url: `https://andrs.vercel.app/projects/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ander Rodriguez",
            },
          }),
        }}
      />
      <SideContent className="pr-5 pt-2">
        <ProjectSideInfo project={project} post={post} author={author} />
      </SideContent>
      <AnimatedFirst className="flex-1 pt-5">
        <SlugBreadcrumb
          title={"projects"}
          slug={post.slug}
          className="md:hidden"
        />
        <div className="flex flex-col md:flex-row justify-between gap-3 py-2 border-b pb-5 max-w-[650px]">
          <PostHeader post={post} author={author} />
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
        <article className="prose prose-quoteless prose-neutral dark:prose-invert pb-20 pt-3 max-w-[650px]">
          <CustomMDX source={post.content} />
        </article>
      </AnimatedFirst>
    </Section>
  );
}
