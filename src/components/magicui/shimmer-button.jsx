import React from "react";

import { cn } from "@/lib/utils";

const ShimmerButton = React.forwardRef((
  {
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "3s",
    borderRadius = "100px",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...props
  },
  ref,
) => {
  return (
    (<button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background
        }
      }
      className={cn(
        "tailwind.config.jsgroup tailwind.config.jsrelative tailwind.config.jsz-0 tailwind.config.jsflex tailwind.config.jscursor-pointer tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsoverflow-hidden tailwind.config.jswhitespace-nowrap tailwind.config.jsborder tailwind.config.jsborder-white/10 tailwind.config.jspx-6 tailwind.config.jspy-3 tailwind.config.jstext-white [background:tailwind.config.jsvar(--bg)] [border-radius:tailwind.config.jsvar(--radius)] dark:tailwind.config.jstext-black",
        "tailwind.config.jstransform-gpu tailwind.config.jstransition-transform tailwind.config.jsduration-300 tailwind.config.jsease-in-out active:tailwind.config.jstranslate-y-[1px]",
        className
      )}
      ref={ref}
      {...props}>
      {/* spark container */}
      <div
        className={cn(
          "tailwind.config.js-z-30 tailwind.config.jsblur-[2px]",
          "tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jsoverflow-visible [container-type:tailwind.config.jssize]"
        )}>
        {/* spark */}
        <div
          className="tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jsh-[100cqh] tailwind.config.jsanimate-slide [aspect-ratio:tailwind.config.js1] [border-radius:tailwind.config.js0] [mask:tailwind.config.jsnone]">
          {/* spark before */}
          <div
            className="tailwind.config.jsanimate-spin-around tailwind.config.jsabsolute tailwind.config.jsinset-[-100%] tailwind.config.jsw-auto tailwind.config.jsrotate-0 [background:tailwind.config.jsconic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:tailwind.config.js0_0]" />
        </div>
      </div>
      {children}
      {/* Highlight */}
      <div
        className={cn(
          "tailwind.config.jsinsert-0 tailwind.config.jsabsolute tailwind.config.jsh-full tailwind.config.jsw-full",
          "tailwind.config.jsrounded-2xl tailwind.config.jspx-4 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsshadow-[inset_0_-8px_10px_#ffffff1f]",
          // transition
          "tailwind.config.jstransform-gpu tailwind.config.jstransition-all tailwind.config.jsduration-300 tailwind.config.jsease-in-out",
          // on hover
          "group-hover:tailwind.config.jsshadow-[inset_0_-6px_10px_#ffffff3f]",
          // on click
          "group-active:tailwind.config.jsshadow-[inset_0_-10px_10px_#ffffff3f]"
        )} />
      {/* backdrop */}
      <div
        className={cn(
          "tailwind.config.jsabsolute tailwind.config.js-z-20 [background:tailwind.config.jsvar(--bg)] [border-radius:tailwind.config.jsvar(--radius)] [inset:tailwind.config.jsvar(--cut)]"
        )} />
    </button>)
  );
});

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
