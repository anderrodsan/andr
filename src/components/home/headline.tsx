import React from "react";

import BookMeeting from "@/components/shared/book-meeting";

export default function Headline() {
  return (
    <div className="py-20 space-y-5 flex flex-col items-center px-5">
      <h1 className="text-3xl md:text-5xl font-semibold text-center text-pretty">
        Front-end and full-stack <br />{" "}
        <span className="text-blue-500">web and mobile developer</span>
      </h1>
      <h2 className="max-w-[600px] text-center">
        I&apos;m a full stack developer and UI/UX designer with experience on
        mobile and web development in Nextjs / Expo. I can turn any idea into a
        functioning product just in a few weeks. Ready to launch your startup?
      </h2>
      <BookMeeting
        title="Hire Me"
        className="bg-black dark:bg-white hover:bg-muted h-10"
      />
    </div>
  );
}
