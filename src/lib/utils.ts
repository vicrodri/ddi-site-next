import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for conditional style merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
