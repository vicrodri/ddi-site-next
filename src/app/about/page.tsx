import { BookOpen, LifeBuoy, Share2, Target, Trophy, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DDI",
  description: "Leadership, values, and the standards taht define Dagger Defense Industries.",
};

const command = [
  {
    name: "WELCHA",
    role: "Commanding Officer of DDI",
  },
  {
    name: "YOGZISK",
    role: "Executive Officer of DDI",
  },
  {
    name: "-",
    role: "Command Sargeant Mayor of DDI (None Assigned)",
  },
] as const;
const benefits = [
  {
    icon: Trophy,
    title: "Unmatched Experiences",
    text: "A unique culture that includes training, squad missions, and large organization operations.",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    text: "Join our training sessions to master the intricacies of gameplay and strategy.",
  },
  {
    icon: Target,
    title: "Squad Missions",
    text: "Team up with fellow members to embark on thrilling missions and achieve victory.",
  },
  {
    icon: Users,
    title: "Organization Operations",
    text: "Participate in exciting events and competitions that bring the community together.",
  },
  {
    icon: Share2,
    title: "Resource Sharing",
    text: "Access exclusive tips, tutorials, and resources to improve your gameplay.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Guidance",
    text: "Our experienced members are here to provide support and guidance every step of the way.",
  },
] as const;

const values = [
  {
    title: "Teamwork",
    text: "Collaboration and camaraderie are at the heart of what we do.",
  },
  {
    title: "Loyalty",
    text: "Stay true to each other and the organization even through difficult times.",
  },
  {
    title: "Integrity",
    text: "We uphold the highest standards of honesty and accountability.",
  },
  {
    title: "Honor",
    text: "Adhere to a higher standard of conduct and do what is right.",
  },
  {
    title: "Respect",
    text: "Always recognize the inherent dignity and worth of all people.",
  },
  {
    title: "Innovation",
    text: "Constantly pushing the boundaries to improve and evolve.",
  },
] as const;

const rules = [
  {
    title: "Age Limit",
    text: "Applicants and current members must be at least 18 or older.",
  },
  {
    title: "Real Life First",
    text: "DDI will never ask you to put the organization or Star Citizen ahead of your real life. As you climb the ladder of responsibility, more time may be asked starting at team leader level.",
  },
  {
    title: "Exclusivity",
    text: "DDI requires that you have DDI as your only Org. This is non-negotiable.",
  },
  {
    title: "Anti-Piracy",
    text: "Members are not permitted to attack or steal from another player unless that player has initiated a hostile act.",
  },
  {
    title: "Anti-Griefing",
    text: "No member is permitted to commit any griefing, gatekeeping, or trolling against another Star Citizen player.",
  },
  {
    title: "Uniforms",
    text: "Members participating in organization events are required to wear DDI uniforms. Free-time play does not require uniforms.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Organization</p>
          <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>About DDI</h1>
          <p className='mt-3 max-w-2xl text-muted-foreground'>
            Leadership, values, and the standards that define Dagger Defense Industries.
          </p>
        </div>
      </section>

      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Command Team</h2>
          <div className='mt-8 grid gap-4 sm:grid-cols-3'>
            {command.map((c) => (
              <div key={c.role} className='rounded-[var(--radius-lg)] border border-border bg-card p-6 text-center'>
                <p className='font-display text-lg font-bold uppercase tracking-wider text-primary'>{c.name}</p>
                <p className='mt-1 text-sm text-muted-foreground'>{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding-sm border-b border-border'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>
            What You Get as a Member
          </h2>
          <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {benefits.map((b) => (
              <article key={b.title} className='rounded-[var(--radius-lg)] border border-border bg-card p-6'>
                <div className='mb-3 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary'>
                  <b.icon className='h-4 w-4' />
                </div>
                <h3 className='font-display text-sm font-semibold uppercase tracking-wide'>{b.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Our Core Values</h2>
          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {values.map((v) => (
              <div key={v.title} className='rounded-[var(--radius-lg)] border border-border bg-card px-5 py-4'>
                <h3 className='font-display text-sm font-bold uppercase tracking-wider text-primary'>{v.title}</h3>
                <p className='mt-1 text-sm text-muted-foreground'>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>Core Rules</h2>
          <div className='mt-8 space-y-4'>
            {rules.map((r) => (
              <div key={r.title} className='rounded-[var(--radius-lg)] border border-border bg-card px-5 py-4'>
                <h3 className='font-display text-sm font-bold uppercase tracking-wider text-foreground'>{r.title}</h3>
                <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
