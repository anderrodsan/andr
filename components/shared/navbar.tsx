"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import BookMeeting from "./book-meeting";

export default function NavBar() {
  const path = usePathname();

  return (
    <div className="sticky top-0 z-20 w-full py-3 grid grid-cols-2 md:grid-cols-3 gap-2 items-center bg-white/50 dark:bg-black/40 backdrop-blur-md px-5 md:px-10 lg:px-32 shadow-sm">
      <Link href={"/"} className="flex-1 flex group text-2xl font-bold w-full">
        <p className="group-hover:scale-110 group-hover:-rotate-2 transition duration-300">
          &R
        </p>
      </Link>
      <ul className="flex-1 space-x-5 hidden md:flex justify-center items-center text-sm">
        <Link
          href="/projects"
          className={`px-3 py-2 rounded-lg hover:bg-secondary/50 font-semibold ${
            path === "/projects" && "bg-secondary/70 "
          }`}
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="px-3 py-2 rounded-lg hover:bg-secondary/50 font-semibold"
        >
          Blog
        </Link>
      </ul>
      <div className="flex justify-end gap-5 items-center">
        <ModeToggle />
        <BookMeeting
          title="Hire Me"
          className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100"
        />
      </div>
    </div>
  );
}
