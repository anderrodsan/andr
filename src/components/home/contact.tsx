"use client";

import React from "react";
import BookMeeting from "../shared/book-meeting";
import Animated from "../framer-motion/animated";
import { WobbleCard } from "../ui/wobble-card";
import Noise from "../shared/noise";

export default function Contact() {
  return (
    <div className="pt-10">
      <Animated className="relative rounded-xl text-white w-full overflow-hidden animate-move">
        <div className="flex flex-col items-center p-10">
          <h1 className="text-2xl md:text-3xl font-semibold z-20">Hire me</h1>
          <h2 className="pt-1 pb-5 max-w-[70ch] text-center z-20">
            Are you looking for a freelance web developer and UX/UI designer?
            Book a meeting now!
          </h2>
          <BookMeeting
            title="Hire Me"
            className="bg-white text-black hover:bg-stone-100 hover:scale-110 transition duration-300 z-20"
          />
        </div>

        <div className="z-0 absolute inset-0 h-[100%] w-[100%] bg-gradient-to-br from-blue-700  to-green-700 animate-gradient" />
        <Noise />
      </Animated>
    </div>
  );
}
