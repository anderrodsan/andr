"use client";

import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Animated from "../framer-motion/animated";
import ImageDialog from "../shared/image-dialog";

const Paintings: React.FC = () => {
  const paintings = [
    "/paintings/enric.png",
    "/paintings/giant.png",
    "/paintings/lemons.png",
    "/paintings/nemo.png",
    "/paintings/parrots.png",
    "/paintings/red-car.png",
    "/paintings/swan.png",
    "/paintings/tentacle.png",
  ];

  const [open, setOpen] = React.useState<any>(null);
  const [idx, setIdx] = React.useState<number | null>(null);

  return (
    <Animated className="flex flex-col items-center md:items-start">
      <h1 className="text-2xl md:text-3xl font-semibold">Paintings</h1>
      <p className="opacity-70 text-sm pt-1 pb-5 text-center md:text-start">
        Painting is one of my favorite hobbies. Here I&apos;ll showcase of my
        latest artworks using watercolors and markers.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[75%] md:w-full"
      >
        <CarouselContent>
          {paintings.map((image, index) => (
            <CarouselItem key={index} className="overflow-hidden basis-1/1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.02 * index }}
                className="h-[350px] sm:h-[300px] overflow-hidden rounded-md"
                viewport={{ once: true }}
                onClick={() => {
                  setIdx(index);
                  setOpen(true);
                }}
              >
                <Image
                  alt="Video Image"
                  src={image}
                  height={100}
                  width={100}
                  sizes="100vw"
                  style={{
                    width: "auto",
                    height: "100%",
                    borderRadius: "6px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="md:hover:scale-110 cursor-pointer"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
      {/* Render the zoomed image */}
      <ImageDialog
        idx={idx}
        setIdx={setIdx}
        open={open}
        setOpen={setOpen}
        images={paintings}
        title={"Paintings"}
      />
    </Animated>
  );
};

export default Paintings;
