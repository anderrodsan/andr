import ProjectList from "@/components/projects/ProjectList";
import BentoGrid from "@/components/shared/BentoGrid";
import NavBar from "@/components/shared/NavBar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 px-5 md:px-10 lg:px-32">
      {/** Hero */}
      <section className="flex flex-col gap-2 justify-start items-center border-b py-10">
        <Avatar className="h-28 w-28">
          <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQHvSeGCGtamnA/profile-displayphoto-shrink_800_800/0/1614983373888?e=1726704000&v=beta&t=jU_n-rMa9zSG8QmBVV-cprdecn6ClYxAJRjBGykNq58" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold pt-3">Hey, I'm Ander</h1>
        <h2 className="text-xl font-medium">Software Engineer</h2>
        <p className="opacity-70 max-w-[60ch] text-center">
          MSc in IT, Innovation & Business | Electronics Engineer | AI , Machine
          Learning & Data | Web & Software Development | Sustainability
        </p>
        <div className="flex items-center gap-2 mt-3 pb-5">
          <Link href={"/projects"}>
            <Button variant="secondary">Projects</Button>
          </Link>

          <Button variant="default">Contact</Button>
        </div>
      </section>

      {/** Tech Stack */}
      <section className="flex flex-col items-center space-y-5 py-10 border-b">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Tech Stack</h1>
          <p className="opacity-70 text-center">
            Some of the technologies I&apos;ve worked with
          </p>
        </div>
        <div className="flex justify-center w-full">
          <BentoGrid />
        </div>
      </section>

      {/** Recent Projects */}
      <section className="flex flex-col items-center space-y-5 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Recent Projects</h1>
          <p className="opacity-70 text-center">
            Check out some of my projects
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 sm:px-10 xl:px-60">
          {projects.map((project, index) => (
            <Link
              key={index}
              className="group cursor-pointer"
              href={`/projects/${project.id}`}
            >
              <div className="relative overflow-hidden bg-secondary w-full aspect-square rounded-lg col-span-1">
                <Image
                  src={`/projects/${project.id}/cover.png`}
                  alt="Image"
                  fill
                  style={{ objectFit: "cover", objectPosition: "start" }}
                  className="group-hover:scale-110 group-hover:-translate-y-2 transition duration-300"
                />
              </div>
              <div className="py-2 flex items-start gap-2">
                {/** Logo */}
                <Image
                  alt="Logo"
                  src={project?.logo}
                  width={100}
                  height={100}
                  className="bg-white h-12 w-12 rounded-xl mt-1 group-hover:scale-110 transition ease-in-out duration-300"
                />
                <div className="pt-1">
                  <h2 className="font-semibold line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="line-clamp-1 text-sm opacity-80">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={"/projects"}>
          <Button variant="secondary">View All</Button>
        </Link>
      </section>

      {/** Contact */}
    </main>
  );
}
