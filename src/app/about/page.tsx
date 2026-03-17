import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the World Places project and its technical stack.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-fg">About</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-fg2">
        <p>
          World Places is a portfolio project that renders an interactive 3D
          globe using BabylonJS, built on top of Next.js and React. The goal
          was to combine a non-trivial WebGL integration with modern React
          patterns: server components, client boundaries pushed to the leaves,
          and a clean component architecture.
        </p>
        <p>
          The realistic earth mode uses textures from Solar System Scope
          (CC BY 4.0) for the day map, bump mapping, and cloud layer. The
          stylized mode strips all that away for a flat Gruvbox-colored
          wireframe globe meant to feel like a data visualization.
        </p>
        <p>
          Everything runs client-side. The place data is static, the bookmarks
          live in localStorage, and there are no API calls. The focus is on the
          rendering pipeline, component structure, and the interplay between
          server and client boundaries in Next.js.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-3 font-mono text-sm font-medium text-fg4">Stack</h2>
        <div className="grid grid-cols-2 gap-3 text-sm text-fg3">
          <span>Next.js 16</span>
          <span>App Router</span>
          <span>React 19</span>
          <span>Server + Client Components</span>
          <span>BabylonJS 8</span>
          <span>WebGL rendering</span>
          <span>TypeScript 5.9</span>
          <span>Strict mode</span>
          <span>Tailwind CSS 4</span>
          <span>Gruvbox dark theme</span>
        </div>
      </div>
    </div>
  );
}
