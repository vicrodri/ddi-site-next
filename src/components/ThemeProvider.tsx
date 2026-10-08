"use client";

import { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Application Theme wrapper
 */

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function themeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
