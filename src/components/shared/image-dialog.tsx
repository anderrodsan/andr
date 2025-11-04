"use client";

import Image from "next/image";
import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "../ui/button";

const ImageDialog: React.FC = ({
  idx,
  setIdx,
  open,
  setOpen,
  images,
  title,
}: any) => {
  const [zoom, setZoom] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prevIdxRef = React.useRef<number>(idx);
  const slideDirectionRef = React.useRef<number>(0);

  //detect if the esc or back button is pressed
  const handleEscape = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
      }
    },
    [setOpen]
  );

  //detect if the right or left arrow is pressed in the laptop keyboard
  const handleArrow = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIdx((currentIdx: number) => {
          if (currentIdx < images.length - 1) {
            slideDirectionRef.current = 1;
            return currentIdx + 1;
          }
          return currentIdx;
        });
      } else if (event.key === "ArrowLeft") {
        setIdx((currentIdx: number) => {
          if (currentIdx > 0) {
            slideDirectionRef.current = -1;
            return currentIdx - 1;
          }
          return currentIdx;
        });
      }
    },
    [images.length, setIdx]
  );

  React.useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleArrow);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrow);
    };
  }, [open, handleEscape, handleArrow]);

  // Reset zoom when dialog opens/closes
  React.useEffect(() => {
    if (open) {
      setZoom(false);
      setPosition({ x: 0, y: 0 });
      slideDirectionRef.current = 0;
      prevIdxRef.current = idx;
    }
  }, [open, idx]);

  // Reset zoom and position when image changes
  React.useLayoutEffect(() => {
    if (prevIdxRef.current !== idx) {
      setZoom(false);
      setPosition({ x: 0, y: 0 });
    }
    prevIdxRef.current = idx;
  }, [idx]);

  // Reset position when zoom changes
  React.useEffect(() => {
    setPosition({ x: 0, y: 0 });
  }, [zoom]);

  // Handle mouse move to follow cursor when zoomed
  React.useEffect(() => {
    if (!zoom || !open) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate position relative to center (with some sensitivity)
      const deltaX = (e.clientX - centerX) * 0.5;
      const deltaY = (e.clientY - centerY) * 0.5;

      setPosition({ x: deltaX, y: deltaY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zoom, open]);

  // Handle click to zoom in/out
  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      // Don't zoom if clicking on the zoom button
      if ((e.target as HTMLElement).closest("button")) return;

      if (zoom) {
        // Click to zoom out when zoomed
        setZoom(false);
      } else {
        // Click to zoom in when not zoomed
        setZoom(true);
      }
    },
    [zoom]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogContent className="flex flex-col items-center w-[90%] md:w-[70%] lg:w-[60%] h-[95%] rounded-xl py-5 px-5">
        <p className="font-bold text-xl w-full text-center">{title}</p>
        <div
          ref={containerRef}
          className="relative h-full w-full overflow-hidden rounded-xl select-none"
          onClick={handleClick}
          style={{
            cursor: zoom ? "zoom-out" : "zoom-in",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom(!zoom);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="z-20 absolute top-3 right-0 h-10 w-10 rounded-full border bg-white/50 dark:bg-black/50 flex items-center justify-center"
          >
            {zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={idx}
              className="relative h-full w-full select-none"
              initial={{
                opacity: 0,
                x:
                  slideDirectionRef.current > 0
                    ? 500
                    : slideDirectionRef.current < 0
                      ? -500
                      : 0,
                scale: 1,
              }}
              animate={{
                opacity: 1,
                x: zoom ? position.x : 0,
                y: zoom ? position.y : 0,
                scale: zoom ? 2 : 1,
              }}
              exit={{
                opacity: 0,
                x:
                  slideDirectionRef.current > 0
                    ? -500
                    : slideDirectionRef.current < 0
                      ? 500
                      : 0,
                scale: 1,
              }}
              transition={{
                x: {
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "tween",
                },
                y: { duration: 0.3, ease: "easeInOut" },
                scale: { duration: 0.2, ease: "easeInOut" },
                opacity: { duration: 0.3, ease: "easeInOut" },
              }}
              style={{
                cursor: zoom ? "zoom-out" : "zoom-in",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              <Image
                src={images[idx]}
                alt="zoomed-image"
                fill
                draggable={false}
                style={{ objectFit: "contain" }}
                className="rounded-xl pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-5">
          <Button
            variant={"outline"}
            size={"icon"}
            className={`rounded-full ${idx === 0 && "opacity-50"}`}
            onClick={() => {
              if (idx > 0) {
                slideDirectionRef.current = -1;
                setIdx(idx - 1);
              }
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
              if (idx < images.length - 1) {
                slideDirectionRef.current = 1;
                setIdx(idx + 1);
              }
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
