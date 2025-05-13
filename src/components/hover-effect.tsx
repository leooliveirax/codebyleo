"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { ComponentProps, PropsWithChildren, useState } from "react";

type HoverEffectProps = {
  idx?: number;
} & ComponentProps<"div">;

export function HoverEffect({ idx = 0, children, className }: PropsWithChildren<HoverEffectProps>) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      key={idx}
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
      className={cn("relative flex", className)}>
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

      <div className="z-[1]">{children}</div>
    </div>
  );
}
