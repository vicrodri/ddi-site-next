import { Content } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "D.D.N.F. — Naval Fleet",
  description: "Dagger Defense Naval Fleet — capital fleet, support ships, naval aviation, and SWCC.",
};

const sections: Content[] = [
  {
    title: "Capital fleet",
    body: [
      {
        text: "Capital ships are the largest and most powerful vessels in the DDI Naval Fleet—defined by size, firepower, and strategic importance. They serve as flagships, command centers, and primary offensive/defensive assets.",
        image: "/capital-ship-station.png",
        imageAlt: "Capital ship",
      },
      {
        text: "These ships are equipped with heavy weaponry, advanced shields, and large crew complements. They are designed to engage other capital ships, lead fleet actions, and provide a mobile base for smaller vessels and strike craft. In DDI, capital ships are the centerpiece of fleet operations, often acting as the command hub during major engagements or organizational events.",
      },
    ],
    capabilities: {
      items: [
        "Dreadnoughts (e.g., Retribution)",
        "Fleet carriers (e.g., Bengal)",
        "Escort carriers (e.g., Pegasus)",
        "Battleships, battlecruisers, destroyers (e.g., Javelin)",
        "Frigates (e.g., Idris-M, Idris-P)",
        "Corvettes (e.g., Polaris)",
      ],
      image: "/capital-fleet-orbit.png",
      imageAlt: "Capital fleet",
    },
  },
  {
    title: "Support ships",
    body: [
      {
        text: "Support ships sustain fleet operations and enhance combat effectiveness—crewed by members specializing in logistics, engineering, and support roles. They keep capital ships mission-ready far from home bases.",
        image: "/fleet-carrier.png",
        imageAlt: "Fleet carrier",
      },
      {
        text: "Support ships are essential for maintaining the operational readiness of capital ships and ensuring the fleet can project power far from home bases. In DDI, these ships are often crewed by members specializing in logistics, engineering, and support roles, reflecting the organization’s emphasis on teamwork and sustained operations.",
      },
    ],
    capabilities: {
      items: [
        "Logistics and supply — refuel, rearm, and repair during extended operations",
        "Medical — battlefield triage and recovery",
        "Transport and cargo — personnel, vehicles, and resources",
        "Electronic warfare and recon — intelligence, disruption, early warning",
        "Escort and patrol — protect capital ships and maintain fleet security",
      ],
      image: "/bomber-flight.png",
      imageAlt: "Ground support linked to fleet logistics",
    },
  },
  {
    title: "Naval aviation",
    body: [
      {
        text: "Dagger Defense Industries (DDI) Naval Aviation is a highly organized branch within the Star Citizen universe, specializing in the deployment and operation of advanced spacecraft for combat, logistics, and tactical support. The fighter wing forms the backbone of DDI’s air superiority strategy, fielding a range of ships from nimble light fighters to heavy fighters. These ships are designed for rapid response, interception, and battlefield dominance, leveraging speed, firepower, and specialized roles like stealth and electronic warfare to secure the skies and protect fleet assets.",
        image: "/hornet-fighter.png",
        imageAlt: "Precision overwatch supporting aviation strikes",
      },
      {
        text: "DDI’s drop ship operations are integral to planetary assaults and tactical insertions. Utilizing ships such as the Valkyrie and Prowler, Naval Aviation can deliver infantry and vehicles directly to contested zones, supporting ground forces with precision and speed. These drop ships are engineered for survivability and rapid deployment, often equipped with defensive weaponry and specialized features for stealth or heavy lifting.",
        image: "/capital-ship-atmosphere.png",
        imageAlt: "Dropship infantry insertion under combat conditions",
      },
      {
        text: "The transportation division complements these efforts by maintaining a fleet of cargo and personnel carriers, ensuring that resources, reinforcements, and equipment are efficiently moved across the ‘verse to support ongoing operations.",
      },
      {
        text: "Bombers in DDI Naval Aviation play a critical role in strategic strikes against hardened targets and capital ships. Ships like the Gladiator, Eclipse, Retaliator are equipped with torpedoes and heavy ordnance, capable of delivering devastating payloads to enemy installations and fleets. These bombers are often escorted by fighters to maximize their effectiveness and survivability, forming the spearhead of DDI’s offensive capabilities. Through the coordinated use of fighters, drop ships, transport vessels, and bombers, Dagger Defense Industries Naval Aviation ensures operational flexibility, rapid response, and overwhelming force projection throughout the Star Citizen universe.",
        image: "/naval-fighters-tarmac.png",
        imageAlt: "Assault corridor after aviation-supported boarding",
      },
    ],
  },
  {
    title: "SWCC",
    subtitle: "Special Warfare Combatant-Craft Crewmen",
    body: [
      {
        text: "The SWCC (Special Warfare Combatant-Craft Crewmen) within Dagger Defense Industries’ Naval Fleet represents an elite group specializing in special operations, rapid deployment, and high-risk missions across the Star Citizen universe. Drawing inspiration from real-world naval special warfare units, DDI’s SWCC are trained to operate advanced small craft and support vessels, executing tasks that require precision, adaptability, and teamwork. Their responsibilities include covert insertions, extraction of personnel, reconnaissance, and direct action missions in contested or hostile environments.",
        image: "/prowler-hover.png",
        imageAlt: "SWCC rapid deployment from small craft",
      },
      {
        text: "Training for SWCC members is rigorous and multifaceted, as outlined in DDI’s internal training doctrine. SWCC candidates undergo specialized courses covering navigation, small craft piloting, gunnery, engineering, and tactical operations. Leadership roles such as SWCC Commander, Chief of the Boat (COB), and Crew Leaders ensure that each team is mission-ready and capable of operating independently or as part of larger fleet actions. This structure allows SWCC units to support both naval and ground operations, bridging the gap between fleet mobility and special warfare capabilities.",
        image: "/prowler-assault.png",
        imageAlt: "SWCC operator supporting a special mission",
      },
      {
        text: "In the context of Star Citizen, DDI’s SWCC teams are vital for executing high-value missions that require stealth, speed, and operational flexibility. Whether deploying from capital ships for planetary raids, conducting boarding actions, or supporting fleet security, SWCC units enhance DDI’s ability to project power and respond to dynamic threats throughout the ‘verse. Their presence ensures that DDI’s Naval Fleet is not only formidable in open combat but also highly effective in specialized, asymmetric warfare scenarios",
        image: "/anvil-boarding-action.png",
        imageAlt: "Boarding and close-quarters special warfare",
      },
    ],
  },
];

/**
 * Text + optional image in the same content width.
 * Odd blocks (1st, 3rd…): image left. Even: image right.
 * Image column stretches to match the text block height.
 */
function TextWithImage({
  text,
  image,
  imageAlt,
  index,
  as = "p",
}: {
  text: string;
  image?: string;
  imageAlt?: string;
  /** 0-based; even → left, odd → right */
  index: number;
  as?: "p" | "div";
}) {
  const imageOnLeft = index % 2 === 0;
  const TextTag = as;

  if (!image) {
    return <TextTag className='text-sm leading-relaxed text-muted-foreground sm:text-base'>{text}</TextTag>;
  }

  return (
    <div className={cn("flex items-stretch gap-4", imageOnLeft ? "flex-row" : "flex-row-reverse")}>
      <div className='relative w-[38%] min-w-[7rem] max-w-[14rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border'>
        <Image src={image} alt={imageAlt ?? ""} fill className='object-cover' sizes='224px' />
      </div>
      <TextTag className='min-w-0 flex-1 self-center text-sm leading-relaxed text-muted-foreground sm:text-base'>
        {text}
      </TextTag>
    </div>
  );
}

export default function DdnfPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Link
            href='/military'
            className='mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary'
          >
            <ArrowLeft className='h-3.5 w-3.5' />
            Military Branches
          </Link>
          <div className='flex flex-col sm:flex-row items-center gap-8 bg-surface'>
            <div className='relative h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56'>
              <Image
                src='/ddnf-branch-logo.png'
                alt='Dagger Defense Naval Fleet insignia'
                fill
                className='object-contain'
                sizes='224px'
                priority
              />
            </div>

            <div className='flex flex-col '>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Combat arms</p>
              <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>D.D.N.F.</h1>
              <p className='mt-2 font-display text-sm font-semibold uppercase tracking-wider text-primary sm:text-base'>
                Dagger Defense Naval Fleet
              </p>
              <p className='mt-3 max-w-3xl text-muted-foreground'>
                Dagger Defense Industries (DDI) is a premier Star Citizen organization with a strong military and
                logistics focus, led by members with real-world military experience. The Naval Fleet is the backbone of
                DDI’s space operations, combining capital ships and support vessels to ensure security, power
                projection, and operational flexibility across the universe.
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
