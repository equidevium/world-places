"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({
  onSearch,
  placeholder = "Search places...",
}: SearchBarProps) {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);

  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-bg1 bg-bg px-4 py-2.5 font-mono
          text-sm text-fg placeholder:text-fg4 outline-none transition-colors
          focus:border-aqua"
      />
      {input.length > 0 && (
        <button
          type="button"
          onClick={() => setInput("")}
          // TODO: most likely we will need to transfer these to global css or to a relevant style file.
          className="absolute right-3 top-1/2 -translate-y-1/2 text-fg4
            transition-colors hover:text-fg"
        >
          ✕
        </button>
      )}
    </div>
  );
}
