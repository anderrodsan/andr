"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedFirst: React.FC<Props> = ({ children, className }) => {
  const title = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={title}
      initial="initial"
      whileInView="animate"
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFirst;
