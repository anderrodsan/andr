import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "wordwise",
    title: "WordWise",
    author: "anderrodsan",
    date: "2024-07-05",
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
      href: "https://expo.dev/preview/update?message=Animations%20and%20Sorting&updateRuntimeVersion=1.0.4&createdAt=2024-07-17T15%3A06%3A52.484Z&slug=exp&projectId=5715b10b-c3c3-45ea-a780-672c0a567ae3&group=2ece328d-55ef-4292-8d64-5d7647c4a5c5",
    },
  },
  {
    id: "dormhive-app",
    title: "DormHive App",
    author: "anderrodsan",
    date: "2024-06-15",
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
      href: "https://expo.dev/preview/update?message=Marketplace%20chats&updateRuntimeVersion=1.0.0&createdAt=2024-06-15T13%3A45%3A48.754Z&slug=exp&projectId=e5699ccb-e67d-4943-831f-83835976dc7a&group=7ad82c46-44c8-4202-bfff-96a8ef2bce07",
    },
  },
  {
    id: "dormhive-dash",
    title: "DormHive Dash",
    author: "anderrodsan",
    date: "2023-11-19",
    description:
      "An alternative solution to facebook tailored to tenants living in dormitories",
    logo: "/logos/dormhive.png",
    images: {
      count: 4,
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
      href: "https://dash.dormhive.com/dashboard",
    },
  },
  {
    id: "youmap",
    title: "YouMap",
    author: "anderrodsan",
    date: "2024-04-28",
    description: "An interactive map to explore ypur favorite youtuber videos!",
    logo: "/logos/youmap.png",
    images: {
      count: 3,
      path: "/projects/youmap/screen",
      type: "landscape",
    },
    tags: [
      "Website",
      "NextJS",
      "TypeScript",
      "Shadcn UI",
      "TailwindCSS",
      "Leaflet",
    ],
    link: {
      text: "Open Website",
      href: "https://youmap.vercel.app",
    },
  },
];
