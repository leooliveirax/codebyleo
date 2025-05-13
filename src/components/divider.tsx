import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export function Divider({ className }: ComponentProps<"hr">) {
  return (
    <hr
      className={cn("bg-foreground mx-1.5 h-full w-px border-0 mask-y-from-0% mask-y-to-100%", className)}
    />
  );
}
