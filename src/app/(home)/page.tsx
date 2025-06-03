import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { SocialSection } from "./SocialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-8 pb-24 sm:gap-12">
      <HeroSection />
      <AboutSection />
      <SocialSection />
    </div>
  );
}
