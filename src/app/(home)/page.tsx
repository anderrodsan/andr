import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import ProfileInfo from "@/components/home/profile-info";
import RecentProjects from "@/components/home/recent-projects";
import TechStack from "@/components/home/tech-stacks";
import Testimonials from "@/components/home/testimonials";
import BookMeeting from "@/components/shared/book-meeting";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/db/users";

export default function Home() {
  const user = users[0];

  return (
    <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-start  gap-5 px-5 md:px-10 lg:px-32 pb-10">
      <aside className="md:sticky md:top-28 rounded-lg pt-2 md:h-[85dvh] md:w-64 md:border-r">
        <ScrollArea className="h-full">
          <ProfileInfo user={user} />
        </ScrollArea>
      </aside>

      <div className="flex-1 w-full flex flex-col pt-6 min-h-[100dvh]">
        {/** Tech Stack */}
        <TechStack />
        <Experience />

        {/** Testimonials */}
        <Testimonials />

        {/** Recent Projects */}
        <RecentProjects />

        {/** Blog */}
        <section className="flex flex-col items-center md:items-start py-10 border-b">
          <h1 className="text-2xl md:text-3xl font-semibold">Blog</h1>
          <p className="opacity-70  text-sm pt-1">
            A list of articles I&apos;ve written
          </p>
          <p className="opacity-90 pt-5">Comming Soon!</p>
        </section>

        <Contact />
      </div>
    </div>
  );
}
