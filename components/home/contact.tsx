import React from "react";
import BookMeeting from "../shared/book-meeting";
import Animated from "../framer-motion/animated";

export default function Contact() {
  return (
    <Animated className="flex flex-col items-center p-10 rounded-xl bg-gradient-to-br hover:from-blue-700 hover:to-orange-700 from-orange-700 to-blue-700 text-white transition-all">
      <h1 className="text-2xl md:text-3xl font-semibold">Hire me</h1>
      <h2 className="pt-1 pb-5 max-w-[70ch] text-center">
        Are you looking for a freelance web developer and UX/UI designer? Book a
        meeting now!
      </h2>
      <BookMeeting
        title="Hire Me"
        className="bg-white text-black hover:bg-stone-100"
      />
    </Animated>
  );
}
