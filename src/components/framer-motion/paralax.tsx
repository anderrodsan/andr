"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  speed: number;
};

const ParalaxItem: React.FC<Props> = ({ children, className, speed }) => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <motion.div className={className} style={{ y: scrollProgress * speed }}>
      {children}
    </motion.div>
  );
};

export default ParalaxItem;
