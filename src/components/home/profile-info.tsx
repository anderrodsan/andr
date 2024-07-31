import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { User } from "@/lib/types/types";
import Image from "next/image";
import { MapPin } from "lucide-react";
import BookMeeting from "../shared/book-meeting";
import { MapTooltip } from "./map-tooltip";
import ShareCard from "../shared/share-card";

export default function ProfileInfo({ user }: User | any) {
  return (
    <div className="h-full w-full flex flex-col items-center md:items-start pt-16 md:pt-0 md:pr-5">
      {/** Profile Image and Name */}
      <Avatar className="h-28 w-28">
        <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQHvSeGCGtamnA/profile-displayphoto-shrink_800_800/0/1614983373888?e=1726704000&v=beta&t=jU_n-rMa9zSG8QmBVV-cprdecn6ClYxAJRjBGykNq58" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold pt-3">Ander Rodriguez</h1>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-lg font-medium opacity-90">Full-Stack Developer</h2>
        <p className="opacity-70 max-w-[60ch] text-sm py-2 text-center md:text-start">
          I&apos;m a full stack developer and UI/UX designer with experience on
          mobile and web development in Nextjs / Expo. I can turn any idea into
          a functioning product just in a few weeks. Ready to launch your
          startup?
        </p>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Copenhaguen,+Dinamarca/@55.6712398,12.5114238,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?entry=ttu"
          className="flex items-center space-x-2 py-2 cursor-pointer hover:underline opacity-80 hover:opacity-100"
        >
          <MapPin size={20} />
          <h1 className="font-semibold text-sm">Copenhagen, Denmark</h1>
        </Link>
        <div className="flex items-center gap-2 mt-3 pb-5">
          <BookMeeting
            title="Hire Me"
            className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100"
          />
          <ShareCard user={user} />
        </div>
      </div>

      {/** Socials */}
      <div className="pb-5 w-full flex flex-col items-center md:items-start">
        <h1 className="font-semibold text-sm border-b pb-2 mb-1">Social</h1>

        <Link target="_blank" href={user?.github ?? ""}>
          <div className="group flex items-center gap-2 py-2 opacity-80 hover:opacity-100 hover:underline">
            <IoLogoGithub
              size={20}
              className="group-hover:scale-110 transition duration-300"
            />
            <p className="flex-1 text-sm line.clamp-1">
              github.com/{user?.username}
            </p>
          </div>
        </Link>
        <Link target="_blank" href={user?.github ?? ""}>
          <div className="group flex items-center gap-2 py-2 opacity-80 hover:opacity-100 hover:underline">
            <IoLogoLinkedin
              size={20}
              className="group-hover:scale-110 transition duration-300"
            />
            <p className="flex-1 text-sm  line-clamp-1">
              linkedin.com/in/{user?.username}
            </p>
          </div>
        </Link>
      </div>

      {/** Map */}
      <div className="hidden relative group w-full h-32 bg-secondary rounded-xl overflow-hidden cursor-pointer">
        <Image
          src={"/images/map-cph.png"}
          alt="Map"
          fill
          sizes="100vh"
          //cover and place image in center
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="group-hover:scale-110 transition duration-300"
        />
        {/** Dot on the map */}
        <div className="group-hover:-translate-y-2 transition duration-300">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-blue-500 shadow-lg shadow-blue-800 group-hover:scale-[2.2] transition duration-700 opacity-50" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white shadow-md shadow-blue-500" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500" />
        </div>

        <p className="absolute bottom-3 left-3 p-2 rounded-lg bg-white dark:bg-black text-sm font-medium shadow shadow-slate-300">
          Copenhagen, Denmark
        </p>
      </div>
    </div>
  );
}
