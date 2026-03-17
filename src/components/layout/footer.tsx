import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bg1 bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-lg font-bold text-yellow-light">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-fg4">
              An interactive 3D globe showcasing interesting places across the
              world.
            </p>
          </div>

          <div>
            <p className="font-mono text-sm font-semibold text-fg2">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg4 transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm font-semibold text-fg2">Connect</p>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg4 transition-colors hover:text-fg"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-bg1 pt-6">
          <p className="text-center text-xs text-fg4">
            {currentYear} {SITE_NAME}. Built with Next.js, React, and
            BabylonJS.
          </p>
        </div>
      </div>
    </footer>
  );
}
