import { Anvil, Camera, Github, Home, Linkedin, Pencil, Twitter } from "lucide-react";
import { ElementType } from "react";

type NavigationItem = {
  label: string;
  href: string;
  icon: ElementType;
};

type NavigationData = {
  internal: NavigationItem[];
  socials: NavigationItem[];
};

export const NAVIGATION_DATA: NavigationData = {
  internal: [
    {
      label: "Home",
      icon: Home,
      href: "/",
    },
    {
      label: "Writings",
      icon: Pencil,
      href: "/writings",
    },
    {
      label: "Crafts",
      icon: Anvil,
      href: "/crafts",
    },
    {
      label: "Photos",
      icon: Camera,
      href: "/photos",
    },
  ],
  socials: [
    {
      label: "Twitter",
      icon: Twitter,
      href: "https://x.com/leooliveira_x",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/leooliveirax",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/leooliveirax/",
    },
  ],
};
