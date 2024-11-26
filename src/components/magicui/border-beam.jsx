import { cn } from "@/lib/utils";

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0
}) => {
  return (
    (<div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`
        }
      }
      className={cn(
        "tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jsrounded-[inherit] [border:tailwind.config.jscalc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "![mask-clip:tailwind.config.jspadding-box,border-box] ![mask-composite:tailwind.config.jsintersect] [mask:tailwind.config.jslinear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // pseudo styles
        "after:tailwind.config.jsabsolute after:tailwind.config.jsaspect-square after:tailwind.config.jsw-[calc(var(--size)*1px)] after:tailwind.config.jsanimate-border-beam after:[animation-delay:tailwind.config.jsvar(--delay)] after:[background:tailwind.config.jslinear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:tailwind.config.jscalc(var(--anchor)*1%)_50%] after:[offset-path:tailwind.config.jsrect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )} />)
  );
};
