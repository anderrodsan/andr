"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Info, MenuIcon, X } from "lucide-react";
import BookMeeting from "./book-meeting";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io5";

export function Hamburger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between relative pl-3 pr-14 w-full h-full">
          <div className="flex justify-between items-center pb-5">
            <h1 className="flex-1 text-2xl font-bold">&R</h1>
          </div>

          <div className="flex-1 flex flex-col items-start py-5 -mx-3 space-y-5">
            <Button
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
                router.push("/");
              }}
            >
              <p>Home</p>
            </Button>

            <Button
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
                router.push("/about");
              }}
            >
              <p>About me</p>
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
                router.push("/projects");
              }}
            >
              <p>Projects</p>
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
                router.push("/blog");
              }}
            >
              <p>Blog</p>
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
                router.push("/bookmarks");
              }}
            >
              <p>Bookmarks</p>
            </Button>
          </div>
          <div className="space-y-5 flex flex-col w-full">
            <ModeToggle />
            <Link href={"https://github.com/anderrodsan/andr"} target="_blank">
              <Button variant={"outline"} className="rounded-lg">
                <div className="flex gap-2 items-center opacity-80">
                  <IoLogoGithub
                    size={20}
                    className="group-hover:scale-110 transition duration-300"
                  />
                  <p>Source Code</p>
                </div>
              </Button>
            </Link>

            <BookMeeting
              title="Hire Me"
              className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100 w-full"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
