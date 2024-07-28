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
import { X } from "lucide-react";

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

  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <Animated className="flex flex-col items-center md:items-start py-10 border-b">
      <h1 className="text-2xl md:text-3xl font-semibold">Paintings</h1>
      <p className="opacity-70 text-sm pt-1 pb-5">
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
                onClick={() => openZoomedImage(image)}
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
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full p-5 z-50 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center cursor-pointer"
          onClick={closeZoomedImage}
        >
          <div className="relative inset-0 w-full h-full">
            <div className="absolute top-3 right-3">
              <X size={20} />
            </div>
            <Image
              src={zoomedImage}
              alt="zoomed-image"
              layout="fill"
              objectFit="contain"
              className="w-full h-full rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </Animated>
  );
};

export default Paintings;
