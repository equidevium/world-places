import type { NavLink, SocialLink, BadgeVariant } from "@/types/components";

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

export const CATEGORY_VARIANTS: Record<string, BadgeVariant> = {
  "natural-wonder": "success",
  historical: "warning",
  cultural: "info",
  urban: "default",
  remote: "error",
};
