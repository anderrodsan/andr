"use client";

import {
  Check,
  ClipboardCheck,
  ClipboardCopy,
  Copy,
  Copyright,
  Mail,
} from "lucide-react";
import React from "react";
import Noise from "./noise";
import ButtonTooltip from "./button-tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoLogoGithub, IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const [copied, setCopied] = React.useState<boolean>(false);

  return (
    <footer className="relative bg-muted border-t w-full flex flex-col items-center md:flex-row md:justify-between gap-5 px-5 md:px-10 lg:px-32 py-10 text-sm mt-5">
      <div className="flex items-center justify-start gap-2">
        <Copyright size={16} />
        <p>2024 Ander Rodriguez. All rights reserved.</p>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <ButtonTooltip title={copied ? "Copied!" : "Copy Email"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-lg opacity-70 hover:opacity-100"
            onClick={() => {
              navigator.clipboard.writeText("anderrodsan@gmail");
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            {copied ? (
              <Copy
                size={20}
                className="group-hover:scale-110 transition duration-300"
              />
            ) : (
              <IoMdMail
                size={20}
                className="group-hover:scale-110 transition duration-300"
              />
            )}
          </Button>
        </ButtonTooltip>
        <ButtonTooltip title="Source code">
          <Link href={"https://github.com/anderrodsan/andr"} target="_blank">
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-lg opacity-70 hover:opacity-100"
            >
              <IoLogoGithub
                size={20}
                className="group-hover:scale-110 transition duration-300"
              />
            </Button>
          </Link>
        </ButtonTooltip>

        <ButtonTooltip title="LinkedIn">
          <Link href={"https://linkedin.com/in/anderrodsan"} target="_blank">
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-lg opacity-70 hover:opacity-100"
            >
              <FaLinkedin
                size={20}
                className="group-hover:scale-110 transition duration-300"
              />
            </Button>
          </Link>
        </ButtonTooltip>
      </div>
    </footer>
  );
}
