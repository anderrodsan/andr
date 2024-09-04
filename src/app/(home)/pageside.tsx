import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import FAQ from "@/components/home/faq";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/db/users";

export default function Home() {
  const user = users[0];

  return (
    <Section>
      <SideContent className="block">
        <ProfileInfo user={user} />
      </SideContent>

      <MainContent>
        <TechStack />
        <Experience />
        <Testimonials />
        <RecentProjects />
        <RecentBlogs />
        <FAQ />
        <Contact />
      </MainContent>
    </Section>
  );
}
