"use client";

import { Tooltip } from "@/components";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <Tooltip text={theme === "dark" ? "Light mode" : "Dark mode"} className="z-[1]">
      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer p-3"
        whileTap={{ scale: 0.9 }}
        aria-label={theme === "dark" ? "Light mode" : "Dark mode"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
