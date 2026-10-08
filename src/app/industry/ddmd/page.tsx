import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Content } from "@/lib/types";

export const metadata: Metadata = {
  title: "D.D.M.D. — Medical Division",
  description: "Dagger Defense Medical Division — combat medicine, hospital ships, CASEVAC, and medical supply.",
};

const sections: Content[] = [
  {
    title: "Mission",
    body: [
      {
        text: "The Dagger Defense Medical Division is the lifeline of Dagger Defense Industries. DDMD ensures that DDI personnel come home alive. From frontline combat medics keeping operators in the fight, to hospital ship crews handling mass casualty events, DDMD provides critical medical support across every theater of operation.",
        image: "/apollo-triage.png",
        imageAlt: "Personnel supported by medical operations",
      },
      {
        text: "DDMD follows the Industry Medical promotion track with UEC-based advancement. If you want to save lives, support your teammates in the most critical moments, and be the reason someone makes it back to base — DDMD needs you.",
        image: "/casevac-medivac.png",
        imageAlt: "Dagger Defense Medical Division insignia",
      },
    ],
  },
  {
    title: "Responsibilities",
    body: [
      {
        text: "DDMD covers the full spectrum of medical support — from the point of injury under fire to hospital-ship recovery and the training that makes every member a force multiplier for survival.",
        image: "/anvil-boarding-action.png",
        imageAlt: "Frontline operations requiring combat medical support",
      },
    ],
    capabilities: {
      items: [
        "Combat Medical Support — embedded medics with ground and space units for trauma care under fire",
        "Hospital Ship Operations — crew and manage medical vessels as mobile surgical and recovery platforms",
        "Field Medical Training — buddy-aid, triage, and casualty response for all DDI personnel",
        "Casualty Evacuation (CASEVAC) — extract wounded from hostile environments",
        "Medical Supply Management — equipment, pharmaceuticals, and supplies across the operational footprint",
      ],
      image: "/rsi-galaxy.png",
      imageAlt: "High-risk operations supported by CASEVAC and medics",
    },
  },
];

function TextWithImage({
  text,
  image,
  imageAlt,
  index,
}: {
  text: string;
  image?: string;
  imageAlt?: string;
  index: number;
}) {
  const imageOnLeft = index % 2 === 0;

  if (!image) {
    return <p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>{text}</p>;
  }

  return (
    <div className={cn("flex items-stretch gap-4", imageOnLeft ? "flex-row" : "flex-row-reverse")}>
      <div className='relative w-[38%] min-h-[6rem] min-w-[7rem] max-w-[14rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface'>
        <Image src={image} alt={imageAlt ?? ""} fill className='object-cover' sizes='224px' />
      </div>
      <p className='min-w-0 flex-1 self-center text-sm leading-relaxed text-muted-foreground sm:text-base'>{text}</p>
    </div>
  );
}

export default function DdmdPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Link
            href='/industry'
            className='mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary'
          >
            <ArrowLeft className='h-3.5 w-3.5' />
            Industry & Medical
          </Link>
          <div className='flex flex-col sm:flex-row items-center gap-8 bg-surface'>
            <div className='relative h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56'>
              <Image
                src='/ddmd-branch-logo.png'
                alt='Dagger Defense Medical Division insignia'
                fill
                className='object-contain'
                sizes='224px'
                priority
              />
            </div>
            <div className='flex flex-col '>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Support arms</p>
              <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>D.D.M.D.</h1>
              <p className='mt-2 font-display text-sm font-semibold uppercase tracking-wider text-primary sm:text-base'>
                Dagger Defense Medical Division
              </p>
              <p className='mt-3 max-w-2xl text-muted-foreground'>
                DDMD ensures personnel come home alive — from medics under fire to hospital-ship recovery and
                organization-wide medical training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section) => {
        return (
          <section key={section.title} className={cn("section-padding-sm border-b border-border last:border-b-0")}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>{section.title}</h2>
              {section.subtitle ? (
                <p className='mt-1 font-mono text-xs uppercase tracking-widest text-primary'>{section.subtitle}</p>
              ) : null}
              <div className='mt-6 space-y-6'>
                {section.body.map((block, i) => {
                  return (
                    <TextWithImage
                      key={`${section.title}-body-${i}`}
                      text={block.text}
                      image={block.image}
                      imageAlt={block.imageAlt}
                      index={i}
                    />
                  );
                })}
              </div>
              {section.capabilities ? (
                <div className='mt-6'>
                  <p className='font-display text-xs font-bold uppercase tracking-wider text-primary'>Capabilities</p>
                  <div
                    className={cn(
                      "mt-3 flex items-stretch gap-4",
                      // treat capabilities as the "next" block after body length
                      section.body.length % 2 === 0 ? "flex-row" : "flex-row-reverse",
                    )}
                  >
                    {section.capabilities.image ? (
                      <div className='relative w-[38%] min-w-[7rem] max-w-[14rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface'>
                        <Image
                          src={section.capabilities.image}
                          alt={section.capabilities.imageAlt ?? ""}
                          fill
                          className='object-cover'
                          sizes='224px'
                        />
                      </div>
                    ) : null}
                    <ul className='min-w-0 flex-1 space-y-2 self-center'>
                      {section.capabilities.items.map((c) => (
                        <li key={c} className='flex gap-3 text-sm leading-relaxed text-muted-foreground'>
                          <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}
    </>
  );
}
