"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

/**
 * Static header navigation links
 */
const footerItems = [
  { href: "/about", label: "About" },
  { href: "/military", label: "Military" },
  { href: "/industry", label: "Industry" },
  { href: "/join", label: "Join" },
] as const;

const footerExternalLinks = [
  { href: "https://app.daggerdefenseindustry.com/", label: "Members" },
  {
    href: "https://robertsspaceindustries.com/en/orgs/DAGGERORG",
    label: "RSI Org",
  },
  { href: "https://discord.gg/sRP3PEVgJn", label: "Discord" },
] as const;

const footerSocialLinks = [
  {
    href: "https://www.youtube.com/@DDIDAGGERDEFENSEINDUSTRIES",
    label: "DDI",
    kind: "youtube" as const,
  },
  {
    href: "https://www.twitch.tv/ghost2651",
    label: "GHOST2651 Twitch",
    kind: "twitch" as const,
  },
] as const;

const TwitchIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden>
      <path d='M4.25 2 2 5.25v14.5h5V22l2.75-2.25H14.5L20.75 13V2H4.25ZM19 12.25l-3 3h-3.5l-2.5 2v-2H6.5V3.75H19v8.5ZM14.5 6.5h-1.75v5H14.5v-5Zm-4.25 0H8.5v5h1.75v-5Z' />
    </svg>
  );
};

const YoutubeIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden>
      <path d='M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.3 3.9-6.3 3.9Z' />
    </svg>
  );
};
/**
 * DDI Site footer
 */
const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount gate for next-themes
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='border-t border-border bg-surface'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <div className='flex items-center gap-3'>
              <Logo size={36} />
              <span className='font-display text-sm font-semibold uppercase tracking-widest text-foreground'>
                Dagger Defense Industries
              </span>
            </div>
            <p className='max-w-sm text-center text-sm text-muted-foreground md:text-left'>
              A premier Star Citizen gaming organization. Exploration, conquest, and community across the stars.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-6 font-display text-xs font-semibold uppercase tracking-wider'>
            {footerItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                {link.label}
              </Link>
            ))}
            {footerExternalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground transition-colors hover:text-primary'
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Social */}

          <div className='flex flex-wrap items-center justify-center gap-3'>
            {footerSocialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-card px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
              >
                {s.kind === "youtube" ? <YoutubeIcon className='h-4 w-4' /> : <TwitchIcon className='h-4 w-4' />}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className='mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-center font-mono text-[11px] text-muted-foreground/70 sm:flex-row sm:text-left'>
          <p>© {year} Dagger Defense Industries. All rights reserved.</p>
          <p>A Star Citizen gaming organization · Not affiliated with Cloud Imperium Games</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
