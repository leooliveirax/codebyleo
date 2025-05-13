import { BlurFade } from "@/components/blur-fade";
import { AboutSection, HeroSection, ScrollIndicator, SocialSection } from "./_components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-12">
      <HeroSection />

      <BlurFade duration={0.6} delay={0.2} inView>
        <AboutSection />
      </BlurFade>

      <BlurFade duration={0.6} delay={0.3}>
        <SocialSection />
      </BlurFade>

      <BlurFade duration={0.6} delay={0.4}>
        <ScrollIndicator className="sm:hidden" />
      </BlurFade>
    </div>
  );
}
