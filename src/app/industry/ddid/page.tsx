import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Content } from "@/lib/types";

export const metadata: Metadata = {
  title: "D.D.I.D. — Industry Division",
  description: "Dagger Defense Industry Division — manufacturing, commerce, transportation, and construction.",
};

const sections: Content[] = [
  {
    title: "Mission",
    body: [
      {
        text: "The Dagger Defense Industry Division is the economic backbone of Dagger Defense Industries. DDID drives the organization’s industrial power through resource acquisition, material production, trade operations, base construction, and full supply chain management. Whether mining raw materials in the belt, hauling cargo across systems, or constructing forward operating bases, DDID keeps the war machine running.",
        image: "/reclaimer-salvage.png",
        imageAlt: "Industrial and logistics operations across the verse",
      },
      {
        text: "DDID members are the foundation that enables every combat operation, every medical deployment, and every strategic initiative DDI undertakes. If you want to build, trade, haul, or manufacture your way through the ‘verse while being part of a structured military organization — DDID is where you belong.",
        image: "/hull-c-cargo.png",
        imageAlt: "Fleet sustained by industry and logistics",
      },
    ],
  },
  {
    title: "Specialization tracks",
    body: [
      {
        text: "DDID offers four distinct specialization tracks, each with its own advancement path. Choose the lane that matches how you want to contribute to the organization’s industrial power.",
        image: "/rsi-galaxy.png",
        imageAlt: "Dagger Defense Industry Division insignia",
      },
    ],
    capabilities: {
      items: [
        "Manufacturing — material production and refining; advancement based on SCU processed and delivered",
        "Commerce — trade, market operations, and organizational funding; advancement based on UEC revenue generated",
        "Transportation — logistics, cargo hauling, and supply lines; advancement based on SCU moved and UEC earned",
        "Construction — base building, outpost deployment, and infrastructure; advancement based on combined SCU and UEC",
      ],
      image: "/argo-mole-mining.png",
      imageAlt: "Capital assets supported by industry logistics",
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

export default function DdidPage() {
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
                src='/ddid-branch-logo.png'
                alt='Dagger Defense Industrial Division insignia'
                fill
                className='object-contain'
                sizes='224px'
                priority
              />
            </div>
            <div className='flex flex-col '>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Support arms</p>
              <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>D.D.I.D.</h1>
              <p className='mt-2 font-display text-sm font-semibold uppercase tracking-wider text-primary sm:text-base'>
                Dagger Defense Industry Division
              </p>
              <p className='mt-3 max-w-2xl text-muted-foreground'>
                Economic backbone of DDI — resource acquisition, production, trade, construction, and supply chain
                management.
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
