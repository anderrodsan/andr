//from Lee Rob: https://codesandbox.io/p/devbox/leerob-leerob-io-jgf99?file=%2Fapp%2Fblog%2F%5Bslug%5D%2Fpage.tsx%3A124%2C16

import AnimatedFirst from "@/components/framer-motion/animated-first";
import { CustomMDX } from "@/components/mdx/mdx";
import ProjectSideInfo from "@/components/projects/project-info";
import ProjectList from "@/components/projects/project-list";
import SlugBreadcrumb from "@/components/shared/breadcrumb";
import PostHeader from "@/components/shared/post-header";
import { Section, SideContent } from "@/components/shared/side-layout";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/db/blog";
import { projects } from "@/db/projects";
import { users } from "@/db/users";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  //exlude the project for the otherposts
  const otherPosts = projects?.filter((project) => project.id !== params.slug);

  //find the project authors in users.ts
  const author = users?.find((user) => user.username === project?.author);

  if (!post) {
    notFound();
  }

  return (
    <Section className="w-full pr-0 md:pr-0 lg:pr-0 mx-auto max-w-[1500px]">
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
      <SideContent className="pt-2">
        <ProjectSideInfo project={project} post={post} author={author} />
      </SideContent>
      <AnimatedFirst className="flex-1 pt-5 md:pl-5">
        <SlugBreadcrumb
          title={"projects"}
          slug={post.slug}
          className="md:hidden"
        />
        <div className="flex flex-col md:flex-row justify-between gap-3 py-2 pb-5 max-w-[650px]">
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
        <div className="py-10 space-y-5 max-w-[650px]">
          <h2 className="text-3xl font-bold">Other projects</h2>
          <ProjectList projects={otherPosts} className="" />
        </div>
      </AnimatedFirst>
    </Section>
  );
}
