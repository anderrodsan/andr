//from Lee Rob: https://codesandbox.io/p/devbox/leerob-leerob-io-jgf99?file=%2Fapp%2Fblog%2F%5Bslug%5D%2Fpage.tsx%3A124%2C16

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/db/blog";
import { CustomMDX } from "@/components/mdx/mdx";
import BlogSideInfo from "@/components/blog/blog-info";
import { users } from "@/db/users";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import PostHeader from "@/components/shared/post-header";
import { Section, SideContent } from "@/components/shared/side-layout";
import SlugBreadcrumb from "@/components/shared/breadcrumb";
import BlogList from "@/components/blog/blog-list";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts("blog").find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  const ogImage = `https://andrs.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://andrs.vercel.app/blog/${post.slug}`,
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

export default function Blog({ params }) {
  let posts = getBlogPosts("blog");
  let post = posts.find((post) => post.slug === params.slug);

  //other posts (max 4)
  let otherPosts = posts
    .filter((post) => post.slug !== params.slug)
    .slice(0, 4);

  if (!post) {
    notFound();
  }

  //find the project authors in users.ts
  const author = users[0];

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
            image: `https://andrs.vercel.app/og?title=${post.metadata.title}`,
            url: `https://andrs.vercel.app/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ander Rodriguez",
            },
          }),
        }}
      />
      <SideContent className="pt-2 pr-5">
        <BlogSideInfo post={post} author={author} />
      </SideContent>
      <AnimatedFirst className="flex-1 max-w-[650px] pt-5">
        <SlugBreadcrumb
          title={"blog"}
          slug={post.slug}
          className="pb-5 md:hidden"
        />
        <PostHeader
          post={post}
          author={author}
          className="py-2 pb-5 border-b"
        />
        <article className="prose prose-quoteless prose-neutral dark:prose-invert pb-20 pt-3 max-w-[650px]">
          <CustomMDX source={post.content} />
        </article>
        <div className="py-10 border-t space-y-5 w-full">
          <h2 className="text-3xl font-bold">Other Posts</h2>
          <BlogList posts={otherPosts} className="" />
        </div>
      </AnimatedFirst>
    </Section>
  );
}
