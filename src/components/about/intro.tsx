import React from "react";
import AnimatedFirst from "../framer-motion/animated-first";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export default function Intro() {
  return (
    <AnimatedFirst className="rounded-xl">
      <div className="py-3 flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        {/** Profile Image and Name */}
        <Avatar className="h-32 w-32">
          <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQHvSeGCGtamnA/profile-displayphoto-shrink_800_800/0/1614983373888?e=1726704000&v=beta&t=jU_n-rMa9zSG8QmBVV-cprdecn6ClYxAJRjBGykNq58" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-start">
          <h1 className="text-xl font-bold whitespace-nowrap">
            Ander Rodriguez
          </h1>
          <h2 className="font-medium opacity-80 whitespace-nowrap">
            Full-Stack Developer
          </h2>
          <Separator className="my-7 md:my-3" />
          <p className="opacity-70 text-sm text-start">
            I&apos;m a recent masters graduate in IT and business with a
            bachelor in electronics engineering.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-3 pb-10">
        <p className="opacity-70 text-sm pt-1 text-start">
          I lived my whole life in Spain, where I was born, and my curiosity to
          explore other cultures and countries has brought me to where I am
          today: Copengagen. Here's where I completed my masters degree and I
          would place it as one of the top decisions of my life.
        </p>
        <p className="opacity-70 text-sm pt-1 text-start">
          I see myself as a{" "}
          <span className="font-bold">
            "jack of all trades, with on the way to master in some"
          </span>{" "}
          due to my fast learning capabilities and a passion to learn. What I
          love about technology, is that any problem can be solved in an
          efficient and effective way. My creativity enables me to come up with
          ideas and my coding and design skills enable me to bring ideas to
          life. My entrepreneurial mindset can be followed in my SaaS startup
          journey: DormHive.
        </p>
        <p className="opacity-70 text-sm pt-1 text-start">
          My hobbies include socializing with friends, panting, traveling,
          football, many learning languages to connect with different people. In
          my spare time, I write and produce songs that will be comming out
          soon.
        </p>
      </div>
    </AnimatedFirst>
  );
}
