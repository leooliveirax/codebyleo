"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/utils/cn";

type TooltipProps = {
  text: string;
} & React.ComponentProps<"div">;

export function Tooltip({ text, children }: TooltipProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsToastVisible(true)}
      onMouseLeave={() => setIsToastVisible(false)}
      aria-label={text}
      className="relative inline-block">
      <motion.div
        className={cn(
          "bg-background absolute -top-4 left-1/2 [translate:-50%_-50%] rounded-md border whitespace-nowrap",
          "text-foreground px-2 py-1 text-xs"
        )}
        initial={{ opacity: 0, y: 5, filter: "blur(4px)", scale: 0.9 }}
        animate={{
          opacity: isToastVisible ? 1 : 0,
          y: isToastVisible ? 0 : 5,
          filter: isToastVisible ? "blur(0px)" : "blur(4px)",
          scale: isToastVisible ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
        aria-hidden={!isToastVisible}>
        <span>{text}</span>
      </motion.div>

      {children}
    </div>
  );
}
