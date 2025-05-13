"use client";

import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

type ScrollIndicatorProps = {
  className?: string;
};

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest === 0);
  });

  return (
    <AnimatePresence>
      {isAtTop && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className={cn("text-foreground/50 flex max-w-fit flex-col items-center", className)}>
          <span className="font-mono text-xs">SCROLL</span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ChevronDown className="size-4" />
            <ChevronDown className="-mt-2 size-4" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
