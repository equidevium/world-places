// Toggle button for switching between realistic and stylized earth modes.
// Sits as an overlay on top of the canvas, bottom-right corner.

"use client";

import type { RenderMode } from "@/types/earth";

interface RenderToggleProps {
  mode: RenderMode;
  onToggle: () => void;
  disabled?: boolean;
}

export function RenderToggle({ mode, onToggle, disabled }: RenderToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="flex items-center gap-2 rounded-md border border-bg1 bg-bg
        px-3 py-1.5 font-mono text-xs text-fg3 transition-colors
        hover:border-aqua hover:text-fg
        disabled:pointer-events-none disabled:opacity-40"
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${
          mode === "realistic" ? "bg-blue-light" : "bg-aqua-light"
        }`}
      />
      {mode === "realistic" ? "Realistic" : "Stylized"}
    </button>
  );
}
