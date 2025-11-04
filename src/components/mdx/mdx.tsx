import { ChevronRight, ExternalLink, File, Folder } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Code from "./code";
import FileHierarchyViewer from "./file-structure";
import ScreenShots from "./screenshots";
import TechStack from "./techstack";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="hover:opacity-90"
    />
  );
}

function RoundedImage(props) {
  return (
    <>
      <Image alt={props.alt} className="rounded-lg" {...props} />
      <p className="text-center w-full text-sm font-bold">{props.alt}</p>
    </>
  );
}

function Callout(props) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-slate-200 dark:bg-slate-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children);
    let paddingTop = level <= 2 ? "pt-5 leading-loose" : "leading-tight";
    return React.createElement(
      `h${level}`,
      { id: slug, className: `${paddingTop}` },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: `anchor`,
        }),
      ],
      children
    );
  };

  Heading.displayName = `HeadingLevel${level}`;
  return Heading;
}

//Card with inside text as markdown
function Card({ children }: { children: React.ReactNode }) {
  return <p className="w-full py-3 px-3 rounded-xl bg-muted">{children}</p>;
}

function CodeTitle({
  folder,
  children,
}: {
  folder: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 -mb-2 opacity-80">
      {folder && (
        <>
          <Folder size={16} />
          <span className="text-sm font-medium">{folder}</span>
          <ChevronRight size={16} />
        </>
      )}
      <File size={16} />
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}

function LinkCard({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative flex items-center gap-3 border bg-muted hover:bg-secondary p-4 rounded-lg w-auto"
    >
      <Avatar className="w-8 h-8">
        <AvatarImage src={icon ? icon : href + "favicon.ico"} alt={title} />
        <AvatarFallback>&R</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-sm opacity-80">{href}</span>
      </div>
      <ExternalLink
        size={16}
        className="absolute right-3 top-3 opacity-0 group-hover:opacity-50 transition duration-300"
      />
    </Link>
  );
}

function GithubLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative flex items-center gap-3 border bg-muted hover:bg-secondary pt-2 pb-4 px-4 rounded-lg w-auto my-3"
    >
      <FaGithub className="w-6 h-6 opacity-50 group-hover:opacity-80" />
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-xs opacity-80">{href}</span>
      </div>
      <ExternalLink
        size={16}
        className="absolute right-3 top-3 opacity-0 group-hover:opacity-50 transition duration-300"
      />
    </Link>
  );
}

/*
function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
Code.displayName = "Code";
*/

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  LinkCard,
  Callout,
  code: Code,
  CodeTitle,
  Table,
  ScreenShots,
  TechStack,
  Card,
  GithubLink,
  FileHierarchyViewer,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
