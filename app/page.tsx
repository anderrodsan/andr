import ProfileInfo from "@/components/home/profile-info";
import RecentProjects from "@/components/home/recent-projects";
import TechStack from "@/components/home/tech-stacks";
import Testimonials from "@/components/home/testimonials";
import BookMeeting from "@/components/shared/book-meeting";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/data/users";

export default function Home() {
  const user = users[0];

  return (
    <div className="relative w-full flex flex-col md:flex-row items-start justify-start gap-5 px-5 md:px-10 lg:px-32 pb-10">
      <aside className="md:sticky md:top-20 rounded-lg pt-2 md:h-[85dvh] md:w-64 md:border-r">
        <ScrollArea className="h-full">
          <ProfileInfo user={user} />
        </ScrollArea>
      </aside>

      <div className="flex-1 flex flex-col pt-6 min-h-[100dvh]">
        {/** Tech Stack */}
        <TechStack />

        {/** Testimonials */}
        <Testimonials />

        {/** Recent Projects */}
        <RecentProjects />

        {/** Blog */}
        <section className="flex flex-col items-center md:items-start py-10">
          <h1 className="text-2xl md:text-3xl font-semibold">Blog</h1>
          <p className="opacity-70  text-sm pt-1">
            A list of articles I've written
          </p>
          <p className="opacity-90 pt-5">Comming Soon!</p>
        </section>

        <section className="flex flex-col items-center p-10 rounded-xl bg-gradient-to-br from-orange-800 to-blue-800 text-white">
          <h1 className="text-2xl md:text-3xl font-semibold">Hire me</h1>
          <h2 className="pt-1 pb-5 max-w-[70ch] text-center">
            Are you looking for a freelance web developer and UX/UI designer?
            Book a meeting now!
          </h2>
          <BookMeeting
            title="Hire Me"
            className="bg-white text-black hover:bg-stone-100"
          />
        </section>
      </div>
    </div>
  );
}
