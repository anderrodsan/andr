"use client";

import { ClipboardCheck, Copyright, Mail } from "lucide-react";
import React from "react";
import Noise from "./noise";
import ButtonTooltip from "./button-tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoLogoGithub, IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = React.useState<boolean>(false);

  return (
    <footer className="relative bg-muted border-t w-full px-5 md:px-10 lg:px-32 py-20 flex flex-col md:flex-row gap-5 justify-between opacity-80 ">
      <Noise />
      <div className="">
        <h1 className="text-8xl font-bold">&R</h1>
        <p className="text-xl font-bold">Ander Rodriguez</p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold mb-2">Web Portfolio</h2>
        <p className="text-sm">
          Powered by Next.js, Tailwind, and Framer Motion
        </p>
        <p className="text-sm">Hosted on Vercel</p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold mb-2">Socials</h2>
        <p className="text-sm">Github</p>
      </div>
    </footer>
  );
}
