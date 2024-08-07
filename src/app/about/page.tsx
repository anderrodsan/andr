import Paintings from "@/components/about/art";
import Background from "@/components/about/background";
import Bento from "@/components/about/bento";
import Info from "@/components/about/info";
import Intro from "@/components/about/intro";
import AnimatedFirst from "@/components/framer-motion/animated-first";
import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import ProfileInfo from "@/components/home/profile-info";
import RecentProjects from "@/components/home/recent-projects";
import TechStack from "@/components/about/tech-stacks";
import Testimonials from "@/components/home/testimonials";
import BookMeeting from "@/components/shared/book-meeting";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/db/users";

export default function About() {
  return (
    <div className="relative w-full flex flex-col items-center pb-10">
      <div className="flex-1 w-full flex flex-col pt-6 min-h-[100dvh] max-w-[600px] lg:max-w-[800px] px-5">
        <AnimatedFirst className="text-3xl font-semibold text-center md:text-start pb-3">
          About me
        </AnimatedFirst>
        <Intro />
        <Bento />
        <TechStack />
        <Background />
        <Paintings />

        <Contact />
      </div>
    </div>
  );
}
