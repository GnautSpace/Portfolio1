"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    (<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "tailwind.config.jsfont-display tailwind.config.jstext-center tailwind.config.jstext-4xl tailwind.config.jsfont-bold tailwind.config.jstracking-[-0.02em] tailwind.config.jsdrop-shadow-sm md:tailwind.config.jstext-7xl md:tailwind.config.jsleading-[5rem]"
      )}>
      {word}
    </motion.h1>)
  );
};

export default BlurIn;
