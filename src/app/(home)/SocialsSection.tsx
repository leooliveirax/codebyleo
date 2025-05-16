import { BlurFade } from "@/components/BlurFade";
import { NAVIGATION_DATA } from "@/utils/constants";
import Link from "next/link";

export function SocialSection() {
  return (
    <section className="sm:hidden">
      <BlurFade delay={0.3} className="flex gap-8">
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
      </BlurFade>
    </section>
  );
}
