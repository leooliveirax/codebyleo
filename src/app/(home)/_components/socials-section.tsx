import { NAVIGATION_DATA } from "@/constants/navigation";
import Link from "next/link";

export function SocialSection() {
  return (
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
  );
}
