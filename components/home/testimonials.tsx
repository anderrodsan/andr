import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Bob Dylan",
      title: "Software Engineer",
      image:
        "https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png",
      link: "https://github.com/leerob",
      text: "Ander is an exceptionally creative and professional designer and developer.",
    },
    {
      name: "Alice Smith",
      title: "Software Engineer & Designer",
      image:
        "https://banner2.cleanpng.com/20180326/wzw/kisspng-computer-icons-user-profile-avatar-female-profile-5ab915f791e2c1.8067312315220792235976.jpg",
      link: "https://github.com/leerob",
      text: "Ander is an exceptionally creative and professional designer and developer.",
    },
  ];
  return (
    <section className="flex flex-col items-center md:items-start py-10 border-b w-full">
      <h1 className="text-2xl md:text-3xl font-semibold">Testimonials</h1>
      <p className="opacity-70 text-sm pt-1 pb-5">
        This is what people are saying about me
      </p>
      <div className="flex space-x-5 overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="space-y-2 min-w-[300px] p-5 rounded-lg border"
          >
            <div className="flex flex-wrap w-full space-x-2">
              <Avatar>
                <AvatarImage src={testimonial.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p className="font-medium">{testimonial.name}</p>
                <p className="opacity-70 text-sm">{testimonial.title}</p>
              </div>
            </div>
            <p className="opacity-90 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
