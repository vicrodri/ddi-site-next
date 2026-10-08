"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount gate for next-themes
    isMounted(true);
  }, []);

  /**
   * button icon placeholder until rendered
   */
  if (!mounted) {
    return (
      <span
        className='inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-border bg-secondary'
        aria-hidden
      ></span>
    );
  }

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <button
      type='button'
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      className='inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-border bg-secondary text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:ring-2 focus-visible:ring-ring'
      aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkTheme ? <Sun className='h-4 w-4' strokeWidth={2} /> : <Moon className='h-4 w-4' strokeWidth={2} />}
    </button>
  );
};

export default ThemeToggle;
