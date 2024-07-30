"use client";

import Image from "next/image";
import * as React from "react";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const OpenImage: React.FC = ({ zoomedImage, setZoomedImage }: any) => {
  //detect if the esc or back button is pressed
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setZoomedImage(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full p-5 z-50 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center cursor-pointer"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative inset-0 w-full h-full">
            <button
              className="absolute top-3 right-3"
              onClick={() => setZoomedImage(null)}
            >
              <X size={20} />
            </button>
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
    </>
  );
};

export default OpenImage;
