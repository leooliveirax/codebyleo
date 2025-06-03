import { BlurFade } from "@/components/BlurFade";

export function AboutSection() {
  return (
    <section className="md:max-w-[60%]">
      <BlurFade delay={0.2} inView>
        <p className="text-foreground/50 text-xl sm:text-4xl">
          <span>A </span>
          <span className="text-foreground">Software Engineer </span>
          <span>crafting </span>
          <span className="text-foreground">scalable solutions </span>
          <span>with </span>
          <span className="text-foreground">strong fundamentals </span>
          <span>and a passion for building beautiful </span>
          <span className="text-foreground">user-friendly experiences.</span>
        </p>
      </BlurFade>
    </section>
  );
}
