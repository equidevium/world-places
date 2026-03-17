// this is needed since both header and footer will have to reference nav links.

import type { NavLink, SocialLink } from "@/types/components";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/places", label: "Places" },
  { href: "/about", label: "About" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/equidevium",
    icon: "github",
  },
];

export const SITE_NAME = "World Places";
