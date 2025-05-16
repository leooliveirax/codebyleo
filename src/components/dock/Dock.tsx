"use client";

import { Divider, DockItem, HoverEffect, ToggleThemeButton } from "@/components";
import { cn } from "@/utils/cn";
import { NAVIGATION_DATA } from "@/utils/constants";
import { motion } from "motion/react";

export function Dock() {
  return (
    <motion.div
      className={cn(
        "fixed right-0 bottom-6 left-0 mx-auto flex h-14 w-max items-center justify-center rounded-2xl border p-1.5",
        "backdrop-blur-md supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}>
      <div
        className={cn(
          "absolute -top-px -z-1 h-px w-[90%] opacity-20",
          "via-foreground bg-linear-to-r from-transparent to-transparent"
        )}
      />

      {NAVIGATION_DATA.internal.map(({ label, href, icon }, idx) => (
        <HoverEffect as="nav" idx={idx} key={label}>
          <DockItem label={label} href={href} icon={icon} />
        </HoverEffect>
      ))}

      <Divider />

      {NAVIGATION_DATA.socials.map(({ label, href, icon }, idx) => (
        <HoverEffect as="nav" idx={idx} key={label} className="hidden sm:flex">
          <DockItem as="a" label={label} href={href} icon={icon} />
        </HoverEffect>
      ))}

      <Divider className="hidden sm:block" />

      <HoverEffect>
        <ToggleThemeButton />
      </HoverEffect>
    </motion.div>
  );
}
