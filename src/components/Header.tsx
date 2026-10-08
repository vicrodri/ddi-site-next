"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { ExternalLink, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * Static header navigation links
 */
const navItems = [
  { href: "/about", label: "About DDI" },
  { href: "/military", label: "Military Branches" },
  { href: "/industry", label: "Industry & Medical" },
  { href: "/join", label: "How to Join" },
] as const;

/**
 * DDI Site Header
 */
const Header = () => {
  const [open, isOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex shrink-0 items-center gap-3' onClick={() => isOpen(false)}>
          <Logo size={40} className='text-card glow-gold-sm' />
          <span className='hidden font-display text-sm font-semibold uppercase tracking-widest text-background sm:block'></span>
        </Link>
        <nav className='hidden items-center gap-1 md:flex' aria-label='Main'>
          {navItems.map((item) => {
            const activeItem = pathName === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-[var(--radius-md)] px-3 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-colors",
                  activeItem ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href='https://app.daggerdefenseindustry.com/'
            target='_blank'
            rel='noopener noreferer'
            className='ml-1 inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-primary/40 bg-primary/10 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/20'
          >
            Members Only
            <ExternalLink className='h-3 w-3' />
          </a>
        </nav>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <button
            type='button'
            className='inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-border bg-secondary text-foreground md:hidden'
            onClick={() => isOpen((v) => !v)}
            aria-label='Toggle menu'
            aria-expanded={open}
          >
            {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
          </button>
        </div>
      </div>

      {open && (
        <div className='border-t border-border bg-card md:hidden'>
          <nav className='mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3' aria-label='Mobile'>
            {navItems.map((item) => {
              const active = pathName === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => isOpen(false)}
                  className={cn(
                    "rounded-[var(--radius-md)] px-3 py-2.5 font-display text-sm font-semibold uppercase tracking-wider",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href='https://app.daggerdefenseindustry.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-1 inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-primary/40 bg-primary/10 px-3 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-primary'
              onClick={() => isOpen(false)}
            >
              Members Only
              <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
