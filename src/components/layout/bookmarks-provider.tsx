"use client";

// Stores the user's bookmarked places as slugs in localStorage.
// Wrap this around the app tree so any component can read or
// toggle bookmarks without prop drilling.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "world-places:bookmarks";

interface BookmarksContextValue {
  bookmarks: string[];
  toggle: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
}

const BookmarksContext = createContext<BookmarksContextValue | null>(null);

function readFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is string => typeof v === "string");
  } catch {
    return [];
  }
}

function writeToStorage(slugs: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // Storage full or blocked: silently ignore
    // TODO : actually define what should happen here since we would like to also give some sort of limits to the user and inform them about it.
  }
}

interface BookmarksProviderProps {
  children: React.ReactNode;
}

export function BookmarksProvider({ children }: BookmarksProviderProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Read once on mount. Not in useState initializer because
  // localStorage isn't available during SSR and the initial
  // server render must match the client's first draw.
  useEffect(() => {
    setBookmarks(readFromStorage());
  }, []);

  const toggle = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      writeToStorage(next);
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks],
  );

  return (
    <BookmarksContext.Provider value={{ bookmarks, toggle, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks(): BookmarksContextValue {
  const ctx = useContext(BookmarksContext);
  if (!ctx) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return ctx;
}
