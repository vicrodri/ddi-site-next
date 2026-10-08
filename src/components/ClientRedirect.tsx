"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side redirect for static export (server `redirects()` in next.config
 * are not available with `output: 'export'`).
 */
export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <p className="p-8 text-center font-mono text-xs text-muted-foreground">
      Redirecting…
    </p>
  );
}
