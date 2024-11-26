import { cn } from "@/lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true
}) {
  return (<>
    {path && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jssize-full">
        <circle
          className="tailwind.config.jsstroke-black/10 tailwind.config.jsstroke-1 dark:tailwind.config.jsstroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none" />
      </svg>
    )}
    <div
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay
        }
      }
      className={cn(
        "tailwind.config.jsabsolute tailwind.config.jsflex tailwind.config.jssize-full tailwind.config.jstransform-gpu tailwind.config.jsanimate-orbit tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-full tailwind.config.jsborder tailwind.config.jsbg-black/10 [animation-delay:tailwind.config.jscalc(var(--delay)*1000ms)] dark:tailwind.config.jsbg-white/10",
        { "[animation-direction:reverse]": reverse },
        className
      )}>
      {children}
    </div>
  </>);
}
