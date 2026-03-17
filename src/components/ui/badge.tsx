import type { BadgeVariant } from "@/types/components";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "bg-bg2 text-fg3",
  success: "bg-green/15 text-green-light",
  warning: "bg-yellow/15 text-yellow-light",
  error: "bg-red/15 text-red-light",
  info: "bg-blue/15 text-blue-light",
};

export function Badge({ label, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${VARIANT_STYLES[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
