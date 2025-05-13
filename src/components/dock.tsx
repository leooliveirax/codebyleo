import { NAVIGATION_DATA } from "@/constants/navigation";
import { Divider, DockItem, HoverEffect, ToggleTheme } from ".";

export function Dock() {
  return (
    <div className="fixed right-0 bottom-6 left-0 mx-auto flex h-14 w-max items-center justify-center border p-1.5 backdrop-blur-md not-only:rounded-2xl supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10">
      <div className="via-foreground absolute -top-px -z-1 h-px w-[90%] bg-linear-to-r from-transparent to-transparent opacity-20" />

      {NAVIGATION_DATA.internal.map(({ label, href, icon }, idx) => (
        <HoverEffect key={label} idx={idx}>
          <DockItem label={label} href={href} icon={icon} />
        </HoverEffect>
      ))}

      <Divider />

      {NAVIGATION_DATA.socials.map(({ label, href, icon }, idx) => (
        <HoverEffect key={label} idx={idx} className="hidden sm:flex">
          <DockItem label={label} href={href} icon={icon} target="_blank" />
        </HoverEffect>
      ))}

      <Divider className="hidden sm:block" />

      <HoverEffect>
        <ToggleTheme />
      </HoverEffect>
    </div>
  );
}
