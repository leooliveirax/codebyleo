"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip } from ".";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <Tooltip text={theme === "dark" ? "Light mode" : "Dark mode"}>
      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer p-3"
        aria-label={theme === "dark" ? "Light mode" : "Dark mode"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center">
            {theme === "dark" ? (
              <Moon className="text-foreground/80 size-5" />
            ) : (
              <Sun className="text-foreground/80 size-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </Tooltip>
  );
}

// We have 3 approaches to handle hydration errors:
// 1. mounted useState with useEffect(only runs on the client) and early return if the component is not mounted
// 2. lazy loading the component but it needs treatment(skeleton/placeholder) to avoid layout shift
// 3. handle dynamic icon rendering with styles(dark:hidden and light:hidden)
