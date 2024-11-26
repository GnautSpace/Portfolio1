"use client";
import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8
}) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback((e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    (<div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "tailwind.config.jsgroup tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jssize-full tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-xl tailwind.config.jsbg-neutral-100 dark:tailwind.config.jsbg-neutral-900 tailwind.config.jsborder tailwind.config.jstext-black dark:tailwind.config.jstext-white",
        className
      )}>
      <div className="tailwind.config.jsrelative tailwind.config.jsz-10">{children}</div>
      <motion.div
        className="tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.js-inset-px tailwind.config.jsrounded-xl tailwind.config.jsopacity-0 tailwind.config.jstransition-opacity tailwind.config.jsduration-300 group-hover:tailwind.config.jsopacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }} />
    </div>)
  );
}
