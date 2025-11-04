import Paintings from "@/components/about/art";
import Background from "@/components/about/background";
import Bento from "@/components/about/bento";
import TechStack from "@/components/about/tech-stacks";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import Contact from "@/components/home/contact";

export default function About() {
  return (
    <div className="relative w-full flex flex-col items-center pb-10">
      <div className="flex-1 w-full flex flex-col gap-40 pt-6 min-h-[100dvh] max-w-[600px] lg:max-w-[800px] px-5">
        <div className="flex flex-col gap-3">
          <AnimatedFirst className="text-3xl font-semibold text-center md:text-start pb-3">
            About me
          </AnimatedFirst>
          <Bento />
        </div>
        <TechStack />
        <Background />
        <Paintings />

        <Contact />
      </div>
    </div>
  );
}
