import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Navigation } from "@/components/layout/navigation";

export function Header() {
  return (
    <header className="relative border-b border-bg1 bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-xl font-bold text-yellow-light"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fg3 transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <Navigation /> */}
      </div>
    </header>
  );
}
