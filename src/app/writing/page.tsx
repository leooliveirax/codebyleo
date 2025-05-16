import { BlurFade } from "@/components/BlurFade";
import { Construction } from "lucide-react";

export default function Writing() {
  return (
    <section className="flex h-screen justify-center">
      <BlurFade delay={0.1} className="flex flex-col items-center justify-center gap-4">
        <Construction className="size-12" />
        <h1 className="text-center text-2xl font-bold">Writing page is under construction...</h1>
      </BlurFade>
    </section>
  );
}
