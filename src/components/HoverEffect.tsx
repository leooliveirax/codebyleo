"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { ComponentProps, ElementType, PropsWithChildren, useState } from "react";

type HoverEffectProps = {
  as?: ElementType;
  idx?: number;
} & ComponentProps<"div">;

export function HoverEffect({
  as: Component = "div",
  idx = 0,
  className,
  children,
}: PropsWithChildren<HoverEffectProps>) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Component
      key={idx}
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
      className={cn("relative", className)}>
      <AnimatePresence>
        {hoveredIdx === idx && (
          <motion.span
            className="bg-hover absolute inset-0 z-0 block h-full w-full rounded-xl"
            layoutId="hoverEffect"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {children}
    </Component>
  );
}
