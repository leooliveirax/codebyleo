import { ScrollIndicator } from "@/components";
import { NAVIGATION_DATA } from "@/constants/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-12">
      <section className="mt-12 flex flex-col justify-center sm:relative sm:mt-0 sm:min-h-screen sm:items-center">
        <h1 className="text-8xl font-medium sm:text-9xl md:text-[164px]">
          <span className="flex flex-col sm:hidden">
            <span>HEY</span>
            <span>I AM</span>
            <span>LEO</span>
          </span>

          <span className="hidden flex-col gap-4 sm:flex">
            <span className="flex items-center justify-between gap-4">
              <span>HI</span>
              <span>THERE</span>
            </span>

            <span className="flex items-center justify-between px-3">
              <span className="font-mono text-base font-normal">LEO OLIVEIRA</span>
              <span className="w-[30%] border-t md:w-[40%]"></span>
              <span className="font-mono text-base font-normal">SOFTWARE ENGINEER</span>
            </span>

            <span className="flex items-center justify-between gap-4">
              <span>I AM</span>
              <span>LEO</span>
            </span>
          </span>
        </h1>

        <ScrollIndicator className="absolute right-0 bottom-6 hidden sm:flex" />
      </section>

      <section id="about" className="md:max-w-[60%]">
        <p className="text-foreground/50 text-2xl/snug sm:text-4xl/snug">
          <span>A </span>
          <span className="text-foreground">Software Engineer </span>
          <span>crafting </span>
          <span className="text-foreground">scalable solutions </span>
          <span>with </span>
          <span className="text-foreground">strong fundamentals </span>
          <span>and a passion for building beautiful </span>
          <span className="text-foreground">user-friendly experiences.</span>
        </p>
      </section>

      <section className="flex gap-8 sm:hidden">
        {NAVIGATION_DATA.socials.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            className="flex items-center justify-center">
            <Icon className="text-foreground/80 size-5" />
          </Link>
        ))}
      </section>

      <ScrollIndicator className="sm:hidden" />
    </div>
  );
}
