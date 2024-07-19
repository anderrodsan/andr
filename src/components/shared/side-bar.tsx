"use client";

import React from "react";
import {
  ChevronDown,
  DollarSign,
  Info,
  LayoutDashboard,
  MenuIcon,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import BookMeeting from "./book-meeting";

export default function SideBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#1D89E4" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div>
      {open ? (
        <X onClick={() => setOpen(!open)} className="cursor-pointer" />
      ) : (
        <MenuIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100&" }}
            animate={{
              x: 0,
              transition: {
                type: "easeInOut",
                duration: 0.2,
              },
            }}
            exit={{ x: "100%" }}
            className="absolute top-[50px] left-0 w-full h-[100vh] bg-stone-50 p-5 font-semibold"
          >
            <BookMeeting
              title="Hire Me"
              className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100"
            />

            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="flex-start gap-2 hover:bg-stone-100 p-5"
            >
              <p>Home</p>
            </Link>
            <div className="my-3 border" />
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="flex-start gap-2 hover:bg-stone-100 p-5"
            >
              <Info />
              <p>About Me</p>
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="flex-start gap-2 hover:bg-stone-100 p-5"
            >
              <p>Projects</p>
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="flex-start gap-2 hover:bg-stone-100 p-5"
            >
              <p>Blog</p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
