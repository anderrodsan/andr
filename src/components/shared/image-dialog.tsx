"use client";

import Image from "next/image";
import * as React from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const ImageDialog: React.FC = ({
  idx,
  setIdx,
  open,
  setOpen,
  images,
  title,
}: any) => {
  //detect if the esc or back button is pressed
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(null);
    }
  };

  //detect if the right or left arrow is pressed in the laptop keyboard
  const handleArrow = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      if (idx < images.length - 1) {
        setIdx(idx + 1);
      }
    } else if (event.key === "ArrowLeft") {
      if (idx > 0) {
        setIdx(idx - 1);
      }
    }
  };

  const [zoom, setZoom] = React.useState<boolean>(false);

  const imgRef = React.useRef();
  const onUpdate = React.useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleArrow);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col items-center w-[90%] md:w-[70%] lg:w-[60%] h-[95%] rounded-xl py-5 px-5">
        <p className="font-bold text-xl w-full text-center">{title}</p>
        <motion.div
          key={idx}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0.8 }}
          className="relative h-full w-full overflow-hidden rounded-xl"
        >
          <button
            onClick={() => setZoom(!zoom)}
            className="z-20 absolute top-3 right-0 h-10 w-10 rounded-full border bg-white/50 dark:bg-black/50 flex items-center justify-center"
          >
            {zoom ? <ZoomOut size={16} /> : <ZoomIn size={20} />}
          </button>

          <Image
            src={images[idx]}
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
            className={`w-full h-full rounded-xl transition duration-300 ${
              zoom ? "cursor-zoom-out scale-[200%]" : "cursor-zoom-out"
            }`}
            onClick={() => setZoom(!zoom)}
          />
        </motion.div>
        <div className="flex items-center gap-5">
          <Button
            variant={"outline"}
            size={"icon"}
            className={`rounded-full ${idx === 0 && "opacity-50"}`}
            onClick={() => {
              if (idx > 0) setIdx(idx - 1);
            }}
          >
            <ChevronLeft size={20} />
          </Button>
          <p>
            {idx + 1}/{images.length}
          </p>
          <Button
            variant={"outline"}
            size={"icon"}
            className={`rounded-full ${
              idx === images.length - 1 && "opacity-50"
            }`}
            onClick={() => {
              if (idx < images.length - 1) setIdx(idx + 1);
            }}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
