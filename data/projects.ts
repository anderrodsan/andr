import { Project } from "@/lib/types/types";

export const projects: Project[] = [
  {
    id: "wordwise",
    title: "WordWise",
    author: "anderrodsan",
    date: "2022-11-01",
    description:
      "An app to translate words and keep track of the new vobaculary, with an integrated flashcards functionality for an efficient practice.",
    logo: "/logos/wordwise.png",
    images: {
      count: 6,
      path: "/projects/wordwise/screen",
      type: "screen",
    },
    tags: ["Mobile App", "Expo", "React Native", "JavaScript", "TailwindCSS"],
    link: {
      text: "Open in Expo",
      href: "/",
    },
  },
  {
    id: "dormhive-app",
    title: "DormHive App",
    author: "anderrodsan",
    date: "2022-11-01",
    description:
      "An alternative solution to facebook tailored to tenants living in dormitories",
    logo: "/logos/dormhive.png",
    images: {
      count: 6,
      path: "/projects/dormhive-app/screen",
      type: "screen",
    },
    tags: ["Mobile App", "Expo", "React Native", "Supabase", "TailwindCSS"],
    link: {
      text: "Open in Expo",
      href: "/",
    },
  },
  {
    id: "dormhive-dash",
    title: "DormHive Dash",
    author: "anderrodsan",
    date: "2022-11-01",
    description:
      "An alternative solution to facebook tailored to tenants living in dormitories",
    logo: "/logos/dormhive.png",
    images: {
      count: 3,
      path: "/projects/dormhive-dash/screen",
      type: "landscape",
    },
    tags: [
      "Website",
      "NextJS",
      "TypeScript",
      "Supabase",
      "Shadcn UI",
      "TailwindCSS",
    ],
    link: {
      text: "Open Website",
      href: "/",
    },
  },
];
