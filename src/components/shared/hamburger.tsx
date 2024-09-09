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
import BookMeeting from "./book-meeting";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io5";
import {
  Bookmark,
  BookText,
  Code,
  Home,
  Info,
  MenuIcon,
  QrCode,
} from "lucide-react";
import ShareCard from "./share-card";

const paths = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About me",
    path: "/about",
    icon: Info,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Code,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: BookText,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: Bookmark,
  },
];

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
        <div className="flex flex-col justify-between relative pl-3 w-full h-full">
          <div className="flex justify-between items-center pb-5">
            <h1 className="flex-1 text-2xl font-bold">&R</h1>
          </div>

          <div className="flex-1 flex flex-col items-start py-5 -mx-3 space-y-5">
            {paths.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`px-3 py-2 rounded-lg hover:bg-muted whitespace-nowrap ${
                  path === link.path && "bg-muted "
                }`}
              >
                <div className="flex gap-3 items-center">
                  <link.icon
                    size={18}
                    className="group-hover:scale-110 transition duration-300"
                  />
                  <p>{link.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-5 flex flex-col w-full">
            <div className="flex gap-2">
              <ModeToggle />
              <ShareCard>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-lg"
                >
                  <QrCode size={20} />
                </Button>
              </ShareCard>
            </div>

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
              className="bg-black dark:bg-white hover:bg-muted-foreground w-full"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
