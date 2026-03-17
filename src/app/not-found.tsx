import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20">
      <p className="font-mono text-6xl font-bold text-bg3">404</p>
      <p className="mt-4 text-fg3">
        This place doesn't exist, at least not on our globe.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md border border-bg1 px-4 py-2 font-mono text-sm
          text-fg3 transition-colors hover:border-aqua hover:text-fg"
      >
        Back to the map
      </Link>
    </div>
  );
}
