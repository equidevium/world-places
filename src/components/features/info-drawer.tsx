"use client";

import { useEffect, useCallback } from "react";
import type { Place } from "@/types/places";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_VARIANTS } from "@/lib/constants";

interface InfoDrawerProps {
  place: Place | null;
  onClose: () => void;
}

export function InfoDrawer({ place, onClose }: InfoDrawerProps) {
  const isOpen = place !== null;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-hard/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        role="dialog"
        aria-modal={isOpen}
        aria-label={place?.name ?? "Place details"}
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-bg1
          bg-bg shadow-xl transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between border-b border-bg1 px-5 py-4">
            <h2 className="font-mono text-sm font-semibold text-fg">
              {place?.name ?? ""}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="rounded-md p-1 text-fg4 transition-colors hover:bg-bg-soft hover:text-fg"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>

          {place && (
            <div className="flex-1 space-y-5 px-5 py-5">
              <div className="flex items-center gap-3">
                <Badge
                  label={place.category}
                  variant={CATEGORY_VARIANTS[place.category] ?? "default"}
                />
                <span className="text-sm text-fg3">
                  {place.country}, {place.continent}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-fg2">
                {place.description}
              </p>

              <div>
                <h3 className="mb-2 font-mono text-xs font-medium text-fg4">
                  Facts
                </h3>
                <ul className="space-y-2">
                  {place.facts.map((fact, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-bg2 pl-3 text-sm text-fg3"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 border-t border-bg1 pt-4 font-mono text-xs text-fg4">
                <span>{place.coordinates.lat.toFixed(4)}°N</span>
                <span>{place.coordinates.lng.toFixed(4)}°E</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
