import { ArrowRight, Factory, HeartPulse } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry & Medical",
  description: "DDI Industry and Medical Divisions keep the organization supplied, operational, and mission-ready.",
};

const branches = [
  {
    href: "/industry/ddid",
    code: "D.D.I.D.",
    title: "Dagger Defense Industry Division",
    blurb: "In charge of Salvaging, Crafting, Mining and Hauling operations for DDI",
    src: "/ddid-branch-logo.png",
    alt: "Dagger Defense Industry Division insignia",
  },
  {
    href: "/industry/ddmd",
    code: "D.D.M.D.",
    title: "Dagger Defense Medical Division",
    blurb: "Medical Division - critical support in combat and non-combat operations",
    src: "/ddmd-branch-logo.png",
    alt: "Dagger Defense Medical DIvision insignia",
  },
] as const;

export default function IndustryPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Support Arms</p>
          <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>
            Industry & Medical Branches
          </h1>
          <p className='mt-3 max-w-2xl text-muted-foreground'>
            DDI Industry and Medical Divisions keep the organization supplied, operational, and mission-ready.
          </p>
        </div>
      </section>
      {/* Branch cards */}
      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-10 text-center sm:text-left'>
            <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Industrial arms</p>
            <h2 className='mt-2 font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Choose a branch</h2>
            <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
              Explore doctrine and capabilities for each industrial branch.
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
      </section>{" "}
    </>
  );
}
