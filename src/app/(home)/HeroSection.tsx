"use client";

import { BlurFade } from "@/components/BlurFade";
import { motion } from "motion/react";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center sm:relative sm:mt-0 sm:min-h-screen sm:items-center">
      <h1 className="text-8xl font-medium sm:text-9xl md:text-[164px]">
        <BlurFade delay={0.1}>
          <span className="flex flex-col sm:hidden">
            <span>HEY</span>
            <span>I AM</span>
            <span>LEO</span>
          </span>
        </BlurFade>

        <span className="hidden flex-col gap-4 sm:flex">
          <BlurFade direction="up" delay={0.4}>
            <span className="flex items-center justify-between gap-4">
              <span>HI</span>
              <span>THERE</span>
            </span>
          </BlurFade>

          <span className="flex items-center justify-between px-3">
            <BlurFade direction="left" delay={0.4} className="flex">
              <span className="font-mono text-base font-normal">LEO OLIVEIRA</span>
            </BlurFade>

            <motion.span
              initial={{ opacity: 0, width: "30%" }}
              animate={{ opacity: 1, width: "40%" }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="w-[30%] border-t md:w-[40%]"
            />

            <BlurFade direction="right" delay={0.4} className="flex">
              <span className="font-mono text-base font-normal">SOFTWARE ENGINEER</span>
            </BlurFade>
          </span>

          <BlurFade direction="down" delay={0.4}>
            <span className="flex items-center justify-between gap-4">
              <span>I AM</span>
              <span>LEO</span>
            </span>
          </BlurFade>
        </span>
      </h1>

      <ScrollIndicator className="absolute right-0 bottom-7 hidden sm:flex" />
    </section>
  );
}
