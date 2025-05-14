import { BlurFade } from "@/components/blur-fade";
import { AboutSection, HeroSection, ScrollIndicator, SocialSection } from "./_components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-12">
      <HeroSection />

      <BlurFade delay={0.2} inView>
        <AboutSection />
      </BlurFade>

      <BlurFade delay={0.3}>
        <SocialSection />
      </BlurFade>

      <ScrollIndicator className="sm:hidden" />
    </div>
  );
}
