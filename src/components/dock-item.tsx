import Link from "next/link";
import { ElementType } from "react";
import { Tooltip } from ".";

export function DockItem({
  label,
  href,
  target,
  icon: Icon,
}: {
  href: string;
  label: string;
  target?: string;
  icon: ElementType;
}) {
  return (
    <Tooltip text={label}>
      <Link href={href} aria-label={label} target={target} className="flex items-center justify-center p-3">
        <Icon className="text-foreground/80 size-5" />
      </Link>
    </Tooltip>
  );
}
