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
import { useRouter } from "next/navigation";

export function Hamburger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {open ? (
          <X onClick={() => setOpen(!open)} className="cursor-pointer" />
        ) : (
          <MenuIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
        )}
      </SheetTrigger>
      <SheetContent>
        <div className="relative pl-3 pr-14 w-full">
          <div className="flex justify-between items-center pb-5">
            <h1 className="flex-1 text-2xl font-bold">&R</h1>
          </div>
          <BookMeeting
            title="Hire Me"
            className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100"
          />
          <div className="flex flex-col items-start pt-5">
            <button
              onClick={() => {
                router.push("/");
                setOpen(false);
              }}
              className="flex-start gap-2 hover:bg-stone-100 py-2"
            >
              <p>Home</p>
            </button>
            <button
              onClick={() => {
                setOpen(false);
                router.push("/projects");
              }}
              className="flex-start gap-2 hover:bg-stone-100 py-2"
            >
              <p>Projects</p>
            </button>
            <button
              onClick={() => {
                setOpen(false);
                router.push("/blog");
              }}
              className="flex-start gap-2 hover:bg-stone-100 py-2"
            >
              <p>Blog</p>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
