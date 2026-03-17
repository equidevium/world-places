interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-bg1 ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ className = "" }: SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      <div className="h-4 w-3/4 animate-pulse rounded bg-bg1" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-bg1" />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div
      className="rounded-lg border border-bg1 bg-bg-soft p-5"
      aria-hidden="true"
    >
      <Skeleton className="mb-4 h-40 w-full" />
      <SkeletonText />
    </div>
  );
}
