"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import BookMeeting from "./book-meeting";
import SideBar from "./side-bar";
import { Hamburger } from "./hamburger";
import ShareCard from "./share-card";
import { QrCode, Share2 } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";

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
  ];

  return (
    <div className="sticky top-0 z-20 w-full py-3 grid grid-cols-2 md:grid-cols-3 gap-2 items-center bg-white/50 dark:bg-black/50 backdrop-blur-md px-5 md:px-10 lg:px-32 shadow-sm">
      <Link href={"/"} className="flex-1 flex group text-2xl font-bold w-full">
        <p className="group-hover:scale-110 group-hover:-rotate-2 transition duration-300">
          &R
        </p>
      </Link>
      <ul className="flex-1 space-x-5 hidden md:flex justify-center items-center text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`px-3 py-2 rounded-lg hover:bg-secondary/50 font-semibold whitespace-nowrap ${
              path === link.path && "bg-secondary "
            }`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <div className="hidden md:flex justify-end gap-5 items-center">
        <div className="flex gap-2">
          <ShareCard>
            <Button variant={"outline"} size={"icon"} className="rounded-lg">
              <QrCode size={20} />
            </Button>
          </ShareCard>
          <Link href={"https://github.com/anderrodsan/andr"} target="_blank">
            <Button variant={"outline"} size={"icon"} className="rounded-lg">
              <IoLogoGithub
                size={20}
                className="group-hover:scale-110 transition duration-300"
              />
            </Button>
          </Link>
          <ModeToggle />
        </div>

        <BookMeeting
          title="Hire Me"
          className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100"
        />
      </div>
      <div className="flex md:hidden justify-end items-center gap-2">
        <ShareCard>
          <Button variant={"outline"} size={"icon"} className="rounded-lg">
            <QrCode size={20} />
          </Button>
        </ShareCard>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
