import React from "react";
import Animated from "../framer-motion/animated";
import SectionHeader from "./section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How much does a new website cost?",
    answer:
      "Well, each website is unique and will be tailored to the client needs. The price will vary depending on the complexity of the project. For example, a small one-page website can cost between 100€ and 500€, while a large multip page website can cost more than 1000€. It will also depend if the design has to be designed from scratch or if is already been previously done.",
  },
  {
    question: "How long will it take to build the website?",
    answer:
      "As the previous question, it depends on how complex the project is. For example, a small one-page website can take between 2 weeks and 2 month to build, while a large multipage website can take between 2 and 6 months.",
  },
  {
    question: "Will the website be mobile friendly?",
    answer:
      "Yes, every website I do will be entirely responsibe and mobile friendly. I will also make sure that the website is compatible with all devices and browsers for a great user experience.",
  },
  {
    question: "What platform do you build your websites on?",
    answer:
      "I build websites using frameworks including React and NextJS, and I use TailwindCSS for styling. I also build native web applications using React Native and Expo.",
  },
  {
    question: "Can I update the website myself once it’s built?",
    answer:
      "Yes, the project will be stored in a shared Github repository where you will be able to update the website as needed. I will make sure the structure of the project is easy to follow and guide you if neccesary.",
  },
  {
    question: "Will you maintain my site for me?",
    answer:
      "A properly built and secure website needs to be up to date with the latest technologies. I will do my best to keep it up to date, but it might take some time and a small maintenance fee.",
  },
  {
    question: "How will the website be hosted?",
    answer:
      "I commonly use Github as the repository for storing the project, and Vercel as the hosting platform. It provides a free tier for non commercial projects with low traffic, but otherwhise a small monthly fee of around 20€ must be paid. The hosting price will always run on the client.",
  },
  /*
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  
   */
];

export default function FAQ() {
  return (
    <Animated className="flex flex-col gap-5 items-center md:items-start">
      <SectionHeader
        title="FAQ"
        text="Here are some common questions and answers from my services"
      />
      <Accordion type="single" collapsible className="w-full">
        {questions.map((q: any, index: number) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>
              {index + 1}
              {". "}
              {q.question}
            </AccordionTrigger>
            <AccordionContent className="opacity-90">
              {q.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Animated>
  );
}
