import { Content } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "D.D.M.C. — Marine Corps",
  description: "Dagger Defense Marine Corps — mechanized infantry, drop ship infantry, ODST, and SOCOM doctrine.",
};

const units: Content[] = [
  {
    title: "Mechanized Infantry",
    body: [
      {
        text: "The Dagger Defense Industries Mechanized infantry represents the fusion of disciplined ground troops and advanced armored vehicles, tailored for the dynamic and large-scale battles found in Star Citizen. These units are designed to operate seamlessly within the game's expansive environments, leveraging both mobility and firepower to achieve tactical superiority. Mechanized infantry squads are typically transported in armored personnel carriers (APCs) or infantry fighting vehicles (IFVs), which serve as both transport and mobile weapons platforms. This integration allows for rapid deployment across planetary surfaces, enabling forces to respond swiftly to threats or seize objectives before the enemy can react.",
        image: "/anvil-spartan-squad.png",
        imageAlt: "Mechanized infantry deploying from an armored vehicle",
      },
      {
        text: "Functionality is at the core of mechanized infantry operations. In Star Citizen, these units excel at combined arms tactics—coordinating closely with other ground and air assets. The vehicles themselves are equipped with advanced armaments, such as autocannons, missile launchers, and defensive countermeasures, providing heavy fire support for dismounted troops. Infantry can quickly disembark to assault fortified positions, clear buildings, or secure strategic locations, while the vehicles offer suppressive fire and mobile cover. This synergy ensures that mechanized infantry can adapt to both open terrain and dense urban environments, making them versatile assets in any engagement.",
      },
      {
        text: "The strength of Dagger Defense Industries Mechanized infantry lies in their teamwork and adaptability. Vehicles provide protection against enemy fire and environmental hazards, allowing infantry to approach objectives with reduced risk. Meanwhile, the infantry protect the vehicles from close-range threats, such as enemy anti-vehicle teams or ambushes in confined spaces. This mutual support enables flexible tactics, such as flanking maneuvers, rapid assaults, and defensive holds, all of which are essential for success in Star Citizen’s unpredictable combat scenarios.",
        image: "/mechanized-infantry.png",
        imageAlt: "Mechanized infantry deploying",
      },
      {
        text: "Capabilities extend beyond simple transportation and firepower. Mechanized infantry units are trained and equipped to launch fast attacks, reinforce allies, or extract friendly forces under fire. Their vehicles can traverse a variety of terrains, from open plains to rugged mountains, ensuring that no location is out of reach. In defensive operations, mechanized infantry can establish strongpoints, using their vehicles as mobile bunkers to hold key positions against superior numbers. The ability to quickly shift between offense and defense makes these units invaluable for both planned operations and spontaneous engagements. In summary, Dagger Defense Industries Mechanized infantry in Star Citizen embodies the principles of speed, protection, and coordinated action. Their presence on the battlefield transforms the tactical landscape, offering commanders a flexible tool for both seizing opportunities and responding to threats. Whether spearheading an assault, holding a critical objective, or executing a rapid extraction, mechanized infantry are a cornerstone of modern ground warfare in the Star Citizen universe.",
      },
    ],
  },
  {
    title: "Drop Ship Infantry",
    body: [
      {
        text: "The Dagger Defense Industries Drop Ship infantry is designed for rapid deployment and tactical flexibility in both offensive and defensive operations. Drawing inspiration from real-world military practices, these infantry units are typically transported via dropships that enable quick insertion into combat zones, support planetary assaults, and facilitate extraction under fire.",
        image: "/anvil-boarding-action.png",
        imageAlt: "Infantry assault through a boarding tube",
      },
      {
        text: "The strength of the Drop Ship infantry lies in its rigorous training and organizational structure. According to the TRADOC TRAINING COURSES, infantry personnel undergo a progression of specialized training, from basic and advanced infantry skills to leadership roles such as squad leader and platoon sergeant. This ensures that every member is physically and mentally prepared for high-intensity operations, capable of synchronizing all elements of combat power on the battlefield. The foundation of Dagger Defense Industries is built on real-world military experience, with leadership comprised of veterans from the US Army Infantry, further enhancing the unit’s operational effectiveness.",
      },
    ],
    summary: {
      text: "The Dagger Defense Industries Drop Ship infantry excels in delivering highly trained, well-equipped troops directly into the heart of battle. Their dropships provide the mobility and firepower needed for modern warfare, while the infantry’s training and leadership ensure mission success in the most challenging conditions. The combination of real-world military expertise and advanced technology makes these units formidable.",
    },
    capabilities: {
      items: [
        "Rapid deployment — full squads or platoons with heavy weapons and support equipment",
        "Versatile armament — rotary cannons, plasma weapons, missile launchers, and ECM",
        "Advanced defensive systems — armor, shield arrays, and countermeasures",
        "Combined arms integration — coordination with armor, aviation, and support",
        "Leadership and adaptability — agile leaders for complex tactical operations",
      ],
      image: "/dropship-infantry.png",
      imageAlt: "Infantry deploying from dorpship",
    },
  },
  {
    title: "O.D.S.T.",
    subtitle: "Orbital Drop Shock Troopers",
    body: [
      {
        text: "The Dagger Defense Industries ODST (Orbital Drop Shock Troopers) division is inspired by elite rapid-deployment forces, blending real-world military doctrine with the unique demands of Star Citizen’s persistent universe. These troopers are the vanguard of Dagger Defense Industries, specializing in high-risk, high-impact operations that require speed, precision, and adaptability. DDI’s ODSTs are trained to execute complex missions behind enemy lines, often deploying directly from orbit or high-altitude dropships to seize critical objectives or disrupt enemy operations.",
        image: "/atls-geo-ikti.png",
        imageAlt: "ATLS GEO Ikti",
      },
      {
        text: "Functionality is at the heart of the ODST concept. In Star Citizen, DDI ODSTs are equipped for rapid insertion into hostile environments, utilizing dropships and, specialized ATLS for pinpoint deployment. Their training encompasses a wide range of skills, including zero-G maneuvering, atmospheric re-entry, and close-quarters combat. The TRADOC TRAINING COURSES outlines a rigorous progression: from basic and advanced infantry training to specialized roles such as squad leader, platoon sergeant, and Pathfinder. This ensures that every ODST is not only a formidable combatant but also capable of leading small units in dynamic, unpredictable scenarios.",
        image: "/ikti-rad-combat.png",
        imageAlt: "Ikti Combat",
      },
      {
        text: "The strength of DDI’s ODSTs lies in their versatility and resilience. These troopers are selected for their ability to operate independently or as part of a larger force, adapting to rapidly changing mission parameters. Their equipment is state-of-the-art, featuring advanced armor, and a diverse arsenal of weapons tailored for both shipboard assaults and planetary engagements. DDI’s commitment to technological innovation means ODSTs benefit from cutting-edge defensive systems, electronic countermeasures, and medical support, maximizing their survivability in the most dangerous environments.",
        image: "/atlas-ikti-hangar.png",
        imageAlt: "Ikti in hangar",
      },
      {
        text: "In summary, the Dagger Defense Industries ODST division embodies the pinnacle of rapid-response warfare in Star Citizen. Their blend of elite training, advanced technology, and real-world military leadership makes them a formidable force, capable of executing the most challenging missions across the ‘verse. Whether dropping from orbit to seize a landing zone, boarding an enemy capital ship, or leading the charge in a planetary assault, DDI’s ODSTs are the tip of the spear—trusted to succeed where others cannot.",
      },
    ],
  },
  {
    title: "SOCOM",
    subtitle: "Special Operations Command",
    body: [
      {
        text: "The Dagger Defense Industries SOCOM (Special Operations Command) division represents the pinnacle of elite, specialized warfare within the Star Citizen universe. Drawing inspiration from real-world military special operations forces, DDI SOCOM is structured to execute the most complex, high-risk missions that demand precision, adaptability, and discretion. The division’s leadership and training pipeline are modeled after actual military doctrine, as reflected in the TRADOC TRAINING COURSES, which outlines a rigorous progression from SOCOM trainee to operator, team leader, and above. This ensures that every SOCOM member is not only a master of combat but also a leader capable of planning and executing operations in the most challenging environments.",
        image: "/sniper-overwatch.png",
        imageAlt: "SOCOM operator on overwatch",
      },
      {
        text: "Functionality is at the core of DDI SOCOM’s operational philosophy. In Star Citizen, SOCOM units are equipped and trained for rapid deployment across the ‘verse, often operating deep behind enemy lines or in denied areas where conventional forces cannot reach. Their missions may include reconnaissance, sabotage, hostage rescue, targeted strikes, and intelligence gathering. SOCOM operators are adept at using advanced technology, stealth tactics, and unconventional warfare to achieve objectives with minimal footprint. Their ability to seamlessly integrate with other DDI divisions—such as ODST, mechanized infantry, or aerospace support—enables multi-domain operations that can shift the balance of power in any engagement. The strength of Dagger Defense Industries SOCOM lies in its personnel and organizational culture. Members are selected for their exceptional skills, resilience, and capacity for independent action. The training regimen, as detailed in the TRADOC TRAINING COURSES, covers a wide spectrum: from advanced marksmanship and close-quarters battle to electronic warfare, survival, evasion, resistance, and escape (SERE), and leadership under extreme stress. This comprehensive preparation ensures that SOCOM teams can adapt to rapidly changing mission parameters and operate effectively in any environment—be it the vacuum of space, hostile planetary surfaces, or the interiors of enemy capital ships.",
        image: "/socom-raid.png",
        imageAlt: "SOCOM operator on overwatch",
      },
      {
        text: "Capabilities are what set DDI SOCOM apart from conventional forces. Operators are equipped with state-of-the-art gear, including advanced armor, personal shields, electronic countermeasures, and a diverse arsenal of weapons tailored for both stealth and direct action. SOCOM teams often employ specialized vehicles and dropships for covert insertion and extraction, leveraging the latest in Star Citizen’s technological advancements. Their operational doctrine emphasizes speed, surprise, and overwhelming force at the decisive point, allowing them to neutralize high-value targets, disrupt enemy operations, and gather critical intelligence with surgical precision.",
        image: "/socom-boarding.png",
        imageAlt: "SOCOM operator on overwatch",
      },
      {
        text: "In summary, the Dagger Defense Industries SOCOM division embodies the highest standards of special operations warfare in Star Citizen. Their blend of elite training, advanced technology, and real-world military leadership makes them a formidable force, trusted to execute the most sensitive and demanding missions across the ‘verse. Whether conducting covert reconnaissance, leading a surgical strike, or coordinating with other DDI elements for a large-scale operation, SOCOM operators are the tip of the spear—capable of succeeding where others cannot.",
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
      <div className='relative w-[38%] min-w-[7rem] max-w-[14rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface'>
        <Image src={image} alt={imageAlt ?? ""} fill className='object-cover' sizes='224px' />
      </div>
      <TextTag className='min-w-0 flex-1 self-center text-sm leading-relaxed text-muted-foreground sm:text-base'>
        {text}
      </TextTag>
    </div>
  );
}

export default function DdmcPage() {
  return (
    <>
      <section className='section-padding-sm border-b border-border bg-surface'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center align-middle'>
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
                src='/ddmc-branch-logo.png'
                alt='Dagger Defense Marine Corps insignia'
                fill
                className='object-contain'
                sizes='224px'
                priority
              />
            </div>
            <div className='flex flex-col '>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>Combat arms</p>
              <h1 className='mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl'>D.D.M.C.</h1>
              <p className='mt-2 font-display text-sm font-semibold uppercase tracking-wider text-primary sm:text-base'>
                Dagger Defense Marine Corps
              </p>
              <p className='mt-3 max-w-3xl text-muted-foreground'>
                Premier ground combat force of Dagger Defense Industries — mechanized, airborne insertion, orbital
                shock, and special operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {units.map((unit) => (
        <section key={unit.title} className='section-padding-sm border-b border-border last:border-b-0'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='font-display text-xl font-bold uppercase tracking-wide sm:text-2xl'>{unit.title}</h2>
            {unit.subtitle ? (
              <p className='mt-1 font-mono text-xs uppercase tracking-widest text-primary'>{unit.subtitle}</p>
            ) : null}

            <div className='mt-6 space-y-6'>
              {unit.body.map((block, i) => (
                <TextWithImage
                  key={`${unit.title}-body-${i}`}
                  text={block.text}
                  image={block.image}
                  imageAlt={block.imageAlt}
                  index={i}
                />
              ))}
            </div>

            {unit.summary ? (
              <div className='mt-6 rounded-[var(--radius-lg)] border border-border bg-card p-5'>
                <p className='mb-3 font-display text-xs font-bold uppercase tracking-wider text-primary'>Summary</p>
                <TextWithImage
                  text={unit.summary.text}
                  image={unit.summary.image}
                  imageAlt={unit.summary.imageAlt}
                  index={0}
                />
              </div>
            ) : null}

            {unit.capabilities ? (
              <div className='mt-6'>
                <p className='font-display text-xs font-bold uppercase tracking-wider text-primary'>Capabilities</p>
                <div
                  className={cn(
                    "mt-3 flex items-stretch gap-4",
                    // treat capabilities as the "next" block after body length
                    unit.body.length % 2 === 0 ? "flex-row" : "flex-row-reverse",
                  )}
                >
                  {unit.capabilities.image ? (
                    <div className='relative w-[38%] min-w-[7rem] max-w-[14rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface'>
                      <Image
                        src={unit.capabilities.image}
                        alt={unit.capabilities.imageAlt ?? ""}
                        fill
                        className='object-cover'
                        sizes='224px'
                      />
                    </div>
                  ) : null}
                  <ul className='min-w-0 flex-1 space-y-2 self-center'>
                    {unit.capabilities.items.map((c) => (
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
      ))}
    </>
  );
}
