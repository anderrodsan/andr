import React from "react";
import Animated from "../framer-motion/animated";
import { projects } from "@/db/projects";
import { Cake, LanguagesIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../framer-motion/motion-div";
import ButtonTooltip from "../shared/button-tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import SlideAnimation from "../framer-motion/slide-animation";

export default function Bento() {
  const attributes = [
    {
      title: "Age",
      value: getAge("1999-06-20") + " Years",
      icon: Cake,
    },
    {
      title: "From",
      value: "Basque Country, Spain",
      icon: MapPin,
    },
  ];

  //say how old I am by the birth date: "20-06-1999" -> 25 Years
  function getAge(date: string) {
    const birthDate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
  }

  return (
    <section className="flex flex-col items-center md:items-start pb-10 border-b">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
        <div className="flex flex-col md:flex-row gap-5 col-span-3">
          <SlideAnimation
            direction="down"
            delay={0.2}
            className="rounded-lg border p-3 flex items-center justify-center"
          >
            <Avatar className="h-32 w-32">
              <AvatarImage src="/avatar/ander.jpg" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </SlideAnimation>
          <div className="flex flex-col gap-5">
            <SlideAnimation
              direction="left"
              delay={0.3}
              className="flex justify-between items-center gap-5 rounded-lg border p-3 text-center md:text-start"
            >
              <div className="">
                <h1 className="text-xl font-bold">Ander Rodriguez</h1>
                <h2 className="font-medium opacity-80">Full-Stack Developer</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href={"https://github.com/anderrodsan"}
                  target="_blank"
                  className="group p-2 rounded-xl bg-secondary hover:opacity-100 opacity-70 transition-all"
                >
                  <IoLogoGithub size={18} className="group-hover:scale-110" />
                </Link>
                <Link
                  href={"https://linkedin.com/in/anderrodsan"}
                  target="_blank"
                  className="group p-2 rounded-xl bg-secondary hover:opacity-100 opacity-70 transition-all"
                >
                  <IoLogoLinkedin size={18} className="group-hover:scale-110" />
                </Link>
              </div>
            </SlideAnimation>
            <SlideAnimation
              direction="left"
              delay={0.3}
              className="rounded-lg border p-3"
            >
              <p className="opacity-70 font-medium">
                "I&apos;m a recent masters graduate in IT and business with a
                bachelor in electronics engineering."
              </p>
            </SlideAnimation>
          </div>
        </div>

        {attributes.map((item: any, index: number) => (
          <SlideAnimation
            key={index}
            direction="right"
            delay={0.2}
            className={"relative w-full px-3 py-3 space-y-1 rounded-lg border"}
          >
            <div className="flex gap-2 items-center">
              <item.icon size={18} />
              <p className="text-sm opacity-70">{item.title}</p>
            </div>
            <p className="font-medium opacity-80">{item.value}</p>
          </SlideAnimation>
        ))}
        <Map />
        <Languages />
        <SlideAnimation
          direction="up"
          delay={0.4}
          className="rounded-lg border p-3 col-span-3 space-y-2"
        >
          <p className="opacity-70 text-start">
            I lived my whole life in Spain, where I was born, and my curiosity
            to explore other cultures and countries has brought me to where I am
            today: Copengagen. Here's where I completed my masters degree and I
            would place it as one of the top decisions of my life.
          </p>
          <p className="opacity-70 text-start">
            I see myself as a{" "}
            <span className="font-bold">
              "jack of all trades, with on the way to master in some"
            </span>{" "}
            due to my fast learning capabilities and a passion to learn. What I
            love about technology, is that any problem can be solved in an
            efficient and effective way. My creativity enables me to come up
            with ideas and my coding and design skills enable me to bring ideas
            to life. My entrepreneurial mindset can be followed in my SaaS
            startup journey: DormHive.
          </p>
          <p className="opacity-70 text-start">
            My hobbies include socializing with friends, panting, traveling,
            football, many learning languages to connect with different people.
            In my spare time, I write and produce songs that will be comming out
            soon.
          </p>
        </SlideAnimation>
      </div>
    </section>
  );
}

const Map = () => {
  return (
    <Link
      target="_blank"
      href="https://www.google.com/maps/place/Copenhaguen,+Dinamarca/@55.6712398,12.5114238,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?entry=ttu"
      className="h-40 md:h-full col-span-2 md:col-span-1 md:row-span-2"
    >
      <SlideAnimation
        direction="left"
        delay={0.2}
        className="relative group w-full h-full bg-secondary rounded-lg overflow-hidden cursor-pointer"
      >
        <Image
          src={"/images/map-cph.png"}
          alt="Map"
          fill
          sizes="100vh"
          quality={75}
          priority={false}
          //cover and place image in center
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="group-hover:scale-125 transition duration-300"
        />
        {/** Dot on the map */}
        <div className="group-hover:-translate-y-2 transition duration-300">
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-blue-500 shadow-xl shadow-blue-800 group-hover:scale-[2.5] transition duration-700 opacity-50" />
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white shadow-md shadow-blue-500" />
          <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500" />
        </div>

        <p className="absolute bottom-2 left-2 p-2 rounded-lg bg-white dark:bg-black text-xs font-medium shadow shadow-slate-300">
          Copenhagen, Denmark
        </p>
      </SlideAnimation>
    </Link>
  );
};

const Languages = () => {
  const languages = [
    {
      name: "Spanish",
      level: "Native",
      text: "Hola!",
    },
    {
      name: "Basque",
      level: "Native",
      text: "Kaixo!",
    },
    {
      name: "English",
      level: "Fluent",
      text: "Hey!",
    },
    {
      name: "Danish",
      level: "Intermediate",
      text: "Hej!",
    },
    {
      name: "French",
      level: "Advanced",
      text: "Salut!",
    },
  ];
  return (
    <SlideAnimation
      direction="up"
      delay={0.2}
      className={
        "relative col-span-2 w-full px-3 py-3 space-y-3 rounded-lg border"
      }
    >
      <div className="flex gap-2 items-center">
        <LanguagesIcon size={18} />
        <p className="text-sm opacity-70">Languages</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
        {languages.map((item: any, index: number) => (
          <ButtonTooltip
            title={"👋 " + item.text}
            side="top"
            delay={100}
            key={index}
          >
            <div className="p-3 rounded-lg bg-muted group">
              <p className="font-medium opacity-80">{item.name}</p>
              <p className="text-sm opacity-70">{item.level}</p>
            </div>
          </ButtonTooltip>
        ))}
      </div>
    </SlideAnimation>
  );
};
