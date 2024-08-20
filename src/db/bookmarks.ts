import {
  BringToFront,
  Component,
  FileText,
  Home,
  Lightbulb,
  PaintBucket,
  PenTool,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const bookmarks = [
  {
    title: "Shadcn UI",
    url: "https://ui.shadcn.com/",
    tags: ["UI Components"],
  },
  {
    title: "Aceternity UI",
    url: "https://ui.aceternity.com/",
    tags: ["UI Components"],
  },
  {
    title: "Hyper UI",
    url: "https://www.hyperui.dev/",
    tags: ["UI Components"],
  },
  {
    title: "TailwindCSS",
    url: "https://tailwindcss.com/",
    tags: ["Docs"],
  },
  {
    title: "TailwindCSS Colors",
    url: "https://tailwindcss.com/docs/customizing-colors",
    tags: ["Colors"],
  },
  {
    title: "Color Palette Generator",
    url: "https://coolors.co/generate",
    tags: ["Colors"],
  },
  {
    title: "Lucide React",
    url: "https://lucide.dev/icons/",
    tags: ["Icons"],
  },
  {
    title: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    tags: ["Icons"],
  },
  {
    title: "Expo Icons",
    url: "https://icons.expo.fyi/Index",
    tags: ["Icons"],
  },
  {
    title: "SVG Repo",
    url: "https://www.svgrepo.com/",
    tags: ["SVG"],
  },
  {
    title: "Waves Generator",
    url: "https://getwaves.io/",
    tags: ["SVG"],
  },
  {
    title: "Framer Motion",
    url: "https://www.framer.com/motion/",
    tags: ["Animations"],
  },
  {
    title: "React Native Reanimated",
    url: "https://docs.swmansion.com/react-native-reanimated/",
    tags: ["Animations"],
  },
  /*
  {
    name: "",
    url: "",
    tags: [""],
  },
  */
];

export const options = [
  {
    name: "UI Components",
    icon: Component,
  },
  {
    name: "Colors",
    icon: PaintBucket,
  },
  {
    name: "Icons",
    icon: Home,
  },
  {
    name: "SVG",
    icon: PenTool,
  },
  {
    name: "Animations",
    icon: BringToFront,
  },
  {
    name: "Inspiration",
    icon: Lightbulb,
  },
  {
    name: "Repositories",
    icon: FaGithub,
  },
  {
    name: "Docs",
    icon: FileText,
  },
];
