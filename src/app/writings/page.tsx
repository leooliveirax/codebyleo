import { BlurFade } from "@/components/BlurFade";
import Link from "next/link";

export default function Writings() {
  return (
    <section className="flex h-screen w-full justify-center">
      <BlurFade delay={0.1} className="flex w-full flex-col items-center justify-center">
        <Link
          className="hover:bg-hover z-[1] flex w-full items-center gap-2 rounded-xl px-3 py-4 text-sm"
          href="/writings/welcome">
          <span className="font-medium">Welcome</span>
          <span className="text-foreground/80 hidden sm:block">
            Hello, and a warm welcome to my corner of the internet!
          </span>
          <div className="mx-1 flex-1 border-t"></div>
          <span className="text-foreground/80">2025</span>
        </Link>
      </BlurFade>
    </section>
  );
}
