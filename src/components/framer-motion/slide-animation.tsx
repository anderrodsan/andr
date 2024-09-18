"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  id?: string;
};

const SlideAnimation: React.FC<Props> = ({
  children,
  className,
  direction = "up",
  delay,
  duration,
  id,
}) => {
  //if the direction is up/down set y = 30 or -30 x=0, if left/right set x = 30 or -30 y=0
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0;

  const x = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  const title = {
    initial: {
      opacity: 0,
      y: y,
      x: x,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "easeInOut",
        duration: duration ? duration : 0.5,
        delay: delay ? delay : 0,
      },
    },
  };

  return (
    <motion.div
      variants={title}
      initial="initial"
      whileInView="animate"
      className={className}
      id={id}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
