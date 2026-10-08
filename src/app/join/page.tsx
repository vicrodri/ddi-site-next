import { ExternalLink, FileText, MessageCircle, UserCheck } from "lucide-react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How to Join",
  description: "Follow three easy steps to start your onboarding process with Dagger Defense Industries.",
};

type Step = {
  n: string;
  icon: typeof FileText;
  title: string;
  text: ReactNode;
};

const steps: Step[] = [
  {
    n: "01",
    icon: FileText,
    title: "Apply on RSI",
    text: (
      <>
        Apply to Dagger Defense Industries on the RSI website{" "}
        <a
          href='https://robertsspaceindustries.com/en/orgs/DAGGERORG'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary underline-offset-2 hover:underline'
        >
          here
        </a>
        . In the application, explain why you want to join and how you found out about DDI.
      </>
    ),
  },
  {
    n: "02",
    icon: UserCheck,
    title: "Match Handle & Moniker",
    text: (
      <>
        Make sure that your <strong className='text-foreground'>RSI Handle and Moniker</strong> match exactly and are
        not tactically confusing or hard to say.
      </>
    ),
  },
  {
    n: "03",
    icon: MessageCircle,
    title: "Join Discord",
    text: (
      <>
        Join our{" "}
        <a
          href='https://discord.gg/sRP3PEVgJn'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary underline-offset-2 hover:underline'
        >
          Discord
        </a>{" "}
        and meet with a member of our Recruiting and Onboarding team.
      </>
    ),
  },
];

export default function JoinPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Recruitment</p>
          <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>How to Join</h1>
          <p className='mt-3 max-w-2xl text-muted-foreground'>
            Follow three easy steps to start your onboarding process with DDI.
          </p>
        </div>
      </section>

      <section className='section-padding-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <ol className='space-y-6'>
            {steps.map((s) => (
              <li
                key={s.n}
                className='relative flex gap-5 rounded-[var(--radius-lg)] border border-border bg-card p-5 sm:p-6'
              >
                <div className='flex flex-col items-center gap-2'>
                  <span className='font-mono text-xs font-bold text-primary'>{s.n}</span>
                  <div className='inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-primary/30 bg-primary/10 text-primary'>
                    <s.icon className='h-5 w-5' />
                  </div>
                </div>
                <div className='flex-1 pt-0.5'>
                  <h2 className='font-display text-base font-bold uppercase tracking-wide'>{s.title}</h2>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className='mt-12 flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-primary/30 bg-primary/5 p-6 text-center sm:p-8'>
            <h3 className='font-display text-lg font-bold uppercase tracking-wide'>Ready to apply?</h3>
            <p className='max-w-md text-sm text-muted-foreground'>
              Start with the RSI application, then hop into Discord. Our recruiting team will guide you from there.
            </p>
            <div className='mt-2 flex flex-wrap justify-center gap-3'>
              <a
                href='https://robertsspaceindustries.com/en/orgs/DAGGERORG'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90'
              >
                Apply on RSI
                <ExternalLink className='h-3.5 w-3.5' />
              </a>
              <a
                href='https://discord.gg/sRP3PEVgJn'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-secondary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary'
              >
                Join Discord
                <ExternalLink className='h-3.5 w-3.5' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
