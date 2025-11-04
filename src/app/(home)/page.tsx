import TechStack from "@/components/about/tech-stacks";
import Contact from "@/components/home/contact";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import RecentBlogs from "@/components/home/recent-blogs";
import RecentProjects from "@/components/home/recent-projects";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center pb-32">
      <div className="flex-1 w-full flex flex-col gap-40 min-h-[100dvh] max-w-[600px] lg:max-w-[800px] px-5">
        <Hero />
        <RecentProjects />
        {/** Testimonials */}
        <TechStack />
        <RecentBlogs />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}
