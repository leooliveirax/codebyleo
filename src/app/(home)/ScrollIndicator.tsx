"use client";

import { BlurFade } from "@/components/BlurFade";
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
    <BlurFade delay={0.4} className={className}>
      <AnimatePresence>
        {isAtTop && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)", y: -6 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(6px)", y: 6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-foreground/50 flex max-w-fit flex-col items-center">
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
    </BlurFade>
  );
}
