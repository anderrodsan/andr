import { Copyright } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t w-full flex flex-col items-center md:flex-row md:justify-between gap-5 px-5 md:px-10 lg:px-32 py-5 text-sm">
      <div className="flex items-center justify-start gap-2">
        <Copyright size={16} />
        <p>2024 Ander Rodriguez. All rights reserved.</p>
      </div>
      <div>
        <span className="font-bold">Contact: </span>anderrodsan@gmail.com
      </div>
    </footer>
  );
}
