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
    <div className="w-full flex flex-col items-center">
      <div className="hidden py-20 space-y-5 flex flex-col items-center px-5">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-pretty">
          Front-end and full-stack <br />{" "}
          <span className="text-blue-500">web and mobile developer</span>
        </h1>
        <h2 className="max-w-[600px] text-center">
          I&apos;m a full stack developer and UI/UX designer with experience on
          mobile and web development in Nextjs / Expo. I can turn any idea into
          a functioning product just in a few weeks. Ready to launch your
          startup?
        </h2>
        <BookMeeting
          title="Hire Me"
          className="bg-black dark:bg-white hover:slate-800 dark:hover:bg-slate-100 h-10"
        />
      </div>
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
    </div>
  );
}
