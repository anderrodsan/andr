import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  title: String;
  text: String;
  path?: String;
};

export default function SectionHeader({ title, text, path }: Props) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
        <p className="opacity-70 text-sm pt-1">{text}</p>
      </div>
      {path && (
        <Link href={"/" + path} className="hidden md:block">
          <Button variant="secondary">View All</Button>
        </Link>
      )}
    </div>
  );
}
