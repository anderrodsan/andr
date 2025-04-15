"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import BookMeeting from "./book-meeting";
import { Hamburger } from "./hamburger";
import ShareCard from "./share-card";
import { Bookmark, QrCode, Share2 } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";
import ButtonTooltip from "./button-tooltip";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
  const path = usePathname();
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About me",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Bookmarks",
      path: "/bookmarks",
    },
  ];

  return (
    <nav className="sticky top-0 z-20 w-full py-4 md:py-3 flex justify-between xl:grid xl:grid-cols-3 gap-2 items-center bg-white/50 dark:bg-black/50 backdrop-blur-md px-5 sm:px-10 md:px-10 lg:px-32 shadow-sm">
      <Link href={"/"} className="flex-1 flex group text-2xl font-bold w-full">
        <p className="group-hover:scale-110 group-hover:-rotate-2 transition duration-300">
          &R
        </p>
      </Link>
      <ul className="space-x-5 hidden md:flex justify-center items-center text-sm">
        {links.map((link, index) => {
          const activePath = path === link.path ? true : false;

          return (
            <Link
              key={index}
              href={link.path}
              className={`relative px-5 py-2 hover:bg-slate-200 dark:hover:bg-slate-900 hover:bg-opacity-50 rounded-full underline-offset-4 font-semibold whitespace-nowrap transition-all`}
            >
              {activePath && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  style={{ borderRadius: "9999px" }}
                  className="absolute inset-0 rounded-full bg-secondary dark:bg-muted"
                />
              )}
              <p className="relative">{link.name}</p>
            </Link>
          );
        })}
      </ul>
      <div className="hidden md:flex justify-end gap-5 items-center pl-5">
        <ButtonTooltip title="Theme">
          <ModeToggle />
        </ButtonTooltip>
        <BookMeeting
          title="Hire Me"
          className="bg-black dark:bg-white hover:bg-muted-foreground"
        />
      </div>
      <div className="flex md:hidden justify-end items-center gap-2">
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}
