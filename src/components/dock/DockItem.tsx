import { Tooltip } from "@/components";
import Link from "next/link";
import { ElementType } from "react";

type DockItemProps = {
  as?: ElementType<{ href: string }>;
  label: string;
  href: string;
  icon: ElementType;
};

export function DockItem({ as: Component = Link, label, href, icon: Icon }: DockItemProps) {
  return (
    <Tooltip text={label}>
      <Component
        href={href}
        target={Component === "a" ? "_blank" : undefined}
        className="flex items-center justify-center p-3"
        aria-label={label}>
        <Icon className="text-foreground/80 size-5" />
      </Component>
    </Tooltip>
  );
}
