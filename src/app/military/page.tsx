import { Anchor, ArrowRight, ClipboardList, GraduationCap, Handshake, Package, Radar, Radio } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Military Branches",
  description: "DDI naval fleet, DDMC staff shops, and TRADOC — the military structure of Dagger Defense Industries.",
};

const staffShops = [
  {
    code: "S-1",
    title: "Personnel",
    icon: ClipboardList,
    text: "Recruits, onboards, tracks and assists all org personnel in administrative matters.",
  },
  {
    code: "S-2",
    title: "Intelligence",
    icon: Radar,
    text: "Conducts intelligence gathering of the Star Citizen universe, systems, planets, stations, orgs, NPCs, etc.",
  },
  {
    code: "S-3",
    title: "Operations",
    icon: Anchor,
    text: "Plans all org operations and works with TRADOC.",
  },
  {
    code: "S-4",
    title: "Logistics",
    icon: Package,
    text: "Collects, holds, tracks and provides all required equipment to authorized org personnel.",
  },
  {
    code: "S-5",
    title: "Civil Affairs",
    icon: Handshake,
    text: "Works with outside friendly orgs and players to foster better relationships and assist when able.",
  },
  {
    code: "S-6",
    title: "Communications",
    icon: Radio,
    text: "Provides assistance to org personnel regarding tactical communication infrastructure.",
  },
] as const;

const branches = [
  {
    href: "/military/ddmc",
    code: "D.D.M.C.",
    title: "Dagger Defense Marine Corps",
    blurb: "Premier ground combat force — mechanized infantry, drop ship infantry, ODST, and SOCOM.",
    src: "/ddmc-branch-logo.png",
    alt: "Dagger Defense Marine Corps insignia",
  },
  {
    href: "/military/ddnf",
    code: "D.D.N.F.",
    title: "Dagger Defense Naval Fleet",
    blurb: "Space operations backbone — capital fleet, naval aviation, and SWCC special craft crews.",
    src: "/ddnf-branch-logo.png",
    alt: "Dagger Defense Naval Fleet insignia",
  },
] as const;

export default function MilitaryPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Structure</p>
          <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>
            Military Branches
          </h1>
          <p className='mt-3 max-w-2xl text-muted-foreground'>
            DDI&apos;s naval fleet is the backbone of our organization.
          </p>
        </div>
      </section>
      {/* Branch cards */}
      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-10 text-center sm:text-left'>
            <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Combat arms</p>
            <h2 className='mt-2 font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Choose a branch</h2>
            <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
              Explore doctrine and capabilities for each military branch.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2'>
            {branches.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className='group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card transition-colors hover:border-primary/40'
              >
                <div className='flex justify-center bg-surface px-6 py-8 sm:py-10'>
                  <div className='relative h-36 w-36 sm:h-44 sm:w-44'>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      className='object-contain transition-transform duration-300 group-hover:scale-[1.03]'
                      sizes='176px'
                    />
                  </div>
                </div>
                <div className='flex flex-1 flex-col p-5 sm:p-6'>
                  <p className='font-mono text-xs uppercase tracking-widest text-primary'>{b.code}</p>
                  <h3 className='mt-1 font-display text-lg font-bold uppercase tracking-wide'>{b.title}</h3>
                  <p className='mt-2 flex-1 text-sm leading-relaxed text-muted-foreground'>{b.blurb}</p>
                  <span className='mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-primary'>
                    View branch
                    <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Staff Shops</h2>
          <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {staffShops.map((s) => (
              <article key={s.code} className='rounded-[var(--radius-lg)] border border-border bg-card p-5'>
                <div className='flex items-center gap-3'>
                  <div className='inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary'>
                    <s.icon className='h-4 w-4' />
                  </div>
                  <div>
                    <p className='font-mono text-xs text-primary'>{s.code}</p>
                    <h3 className='font-display text-sm font-semibold uppercase tracking-wide'>{s.title}</h3>
                  </div>
                </div>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-6 rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:flex-row sm:items-start sm:p-8'>
            <div className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-primary/30 bg-primary/10 text-primary'>
              <GraduationCap className='h-6 w-6' />
            </div>
            <div>
              <h2 className='font-display text-xl font-bold uppercase tracking-wide'>TRADOC</h2>
              <p className='mt-2 max-w-3xl leading-relaxed text-muted-foreground'>
                TRADOC develops and performs all training for DDI, ensuring that all members are fully trained to work
                as a team and accomplish the missions they take on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
