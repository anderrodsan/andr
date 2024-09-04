import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import ProfileInfo from "@/components/home/profile-info";
import RecentBlogs from "@/components/home/recent-blogs";
import RecentProjects from "@/components/home/recent-projects";
import TechStack from "@/components/home/tech-stacks";
import Testimonials from "@/components/home/testimonials";
import BookMeeting from "@/components/shared/book-meeting";
import {
  MainContent,
  Section,
  SideContent,
} from "@/components/shared/side-layout";
import { LampContainer } from "@/components/ui/lamp";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/db/users";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col min-h-[100dvh] max-w-[600px] lg:max-w-[800px] px-5">
        <Hero />
        <TechStack />
        <Experience />
        <Testimonials />
        <RecentProjects />
        <RecentBlogs />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}
