export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info";

export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number | string;
  suffix?: string;
}
