"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Animated: React.FC<Props> = ({ children, className, id }) => {
  const title = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "easeInOut",
        duration: 0.5,
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

export default Animated;
