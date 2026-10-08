import Logo from "@/components/Logo";
import { ArrowRight, Crosshair, Shield, Target, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Home · Dagger Defense Industries" },
  description:
    "Dagger Defense Industries — a premier Star Citizen gaming organization. Exploration, conquest, and community across the stars.",
};

const features = [
  {
    icon: Shield,
    title: "Experienced Leadership",
    description:
      "Built by military veterans with two decades of combined combat and logistics experience brought into the Star Citizen universe.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "An engaging environment for players of all levels — veterans and newcomers alike — focused on teamwork and growth.",
  },
  {
    icon: Target,
    title: "Operations & Training",
    description:
      "Structured training, squad missions, and large organization operations designed to master gameplay and strategy.",
  },
  {
    icon: Crosshair,
    title: "Multi-Branch Structure",
    description:
      "Naval fleet, military combat forces, industry, and medical divisions working as one cohesive organization.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-border'>
        <div className='pointer-events-none absolute inset-0 bg-grid opacity-40' />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background' />
        <div className='relative mx-auto flex max-w-7xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-8 lg:px-8 lg:py-12'>
          <div className='mb-8 rounded-full p-1 glow-gold'>
            <Logo size={96} className='text-card' />
          </div>
          <p className='mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary'>
            Star Citizen Organization
          </p>
          <h1 className='max-w-4xl font-display text-4xl font-bold uppercase leading-tight tracking-wide text-foreground sm:text-5xl lg:text-6xl'>
            Dagger Defense <span className='text-primary'>Industries</span>
          </h1>
          <p className='mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg'>
            A premier gaming organization dedicated to the immersive universe of Star Citizen. Exploration, conquest,
            and community across the stars.
          </p>
          {/* YouTube video */}
          <div className='mt-8 w-full max-w-3xl overflow-hidden rounded-lg border border-border shadow-lg'>
            <div className='relative aspect-video w-full'>
              <iframe
                className='absolute inset-0 h-full w-full'
                src='https://www.youtube.com/embed/ysTUes6bl4k?autoplay=1&mute=1&loop=1&playlist=ysTUes6bl4k&controls=1&rel=0'
                title='Dagger Defense Industries'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>
          <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/join'
              className='inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 glow-gold-sm'
            >
              Join DDI
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/about'
              className='inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-secondary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8'>
          <h2 className='font-display text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl'>
            Who We Are
          </h2>
          <p className='mt-4 leading-relaxed text-muted-foreground'>
            Dagger Defense Industries is a premier gaming organization dedicated to the immersive universe of Star
            Citizen. Our passionate team of gamers is committed to creating an engaging environment for players of all
            levels. Whether you are a veteran in the star realm or just starting your journey, we provide the resources
            and community to enhance your gaming experience.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className='section-padding-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Why DDI</p>
            <h2 className='mt-2 font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl'>
              Built for the Verse
            </h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((f) => (
              <article
                key={f.title}
                className='group rounded-[var(--radius-lg)] border border-border bg-card p-6 transition-colors hover:border-primary/40'
              >
                <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-primary/30 bg-primary/10 text-primary'>
                  <f.icon className='h-5 w-5' strokeWidth={1.75} />
                </div>
                <h3 className='font-display text-base font-semibold uppercase tracking-wide text-foreground'>
                  {f.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='section-padding-sm border-t border-border bg-surface'>
        <div className='mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8'>
          <h2 className='font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl'>Ready to Enlist?</h2>
          <p className='mt-3 text-muted-foreground'>
            Follow three simple steps and start your onboarding with Dagger Defense Industries.
          </p>
          <Link
            href='/join'
            className='mt-8 inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90'
          >
            How to Join
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </section>
    </>
  );
}
