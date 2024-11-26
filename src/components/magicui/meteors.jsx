"use client";;
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={cn(
          "tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jsleft-1/2 tailwind.config.jstop-1/2 tailwind.config.jssize-0.5 tailwind.config.jsrotate-[215deg] tailwind.config.jsanimate-meteor tailwind.config.jsrounded-full tailwind.config.jsbg-slate-500 tailwind.config.jsshadow-[0_0_0_1px_#ffffff10]"
        )}
        style={style}>
        {/* Meteor Tail */}
        <div
          className="tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jstop-1/2 tailwind.config.js-z-10 tailwind.config.jsh-px tailwind.config.jsw-[50px] tailwind.config.js-translate-y-1/2 tailwind.config.jsbg-gradient-to-r tailwind.config.jsfrom-slate-500 tailwind.config.jsto-transparent" />
      </span>)
    ))}
  </>);
};

export default Meteors;
