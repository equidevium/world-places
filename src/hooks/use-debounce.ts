"use client";

import { useEffect, useState } from "react";

// generic hook that takes any value and a delay in miliseconds and returns a debounced version of the same value.
// The output only updates once the input stops changin for the specifiid duraation.
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}
