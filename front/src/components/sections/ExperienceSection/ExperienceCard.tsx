import type { ExperienceItem } from "@/domain/portfolio/types";

interface ExperienceCardProps {
  readonly item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  const baseClasses =
    "grid min-h-[420px] grid-rows-[auto_1fr_auto] border p-6 transition-[background-color,color,transform,border-color] duration-300 ease-[ease] max-[900px]:min-h-[280px] max-[580px]:min-h-[300px]";
  const standardClasses =
    "border-line bg-transparent hover:border-teal hover:bg-teal hover:text-white hover:[transform:rotate(-0.7deg)_translateY(-6px)]";
  const featuredClasses =
    "border-coral bg-coral text-white [transform:rotate(0.7deg)] hover:border-coral hover:bg-coral hover:[transform:rotate(0deg)_translateY(-7px)]";
  const cardClasses = `${baseClasses} ${item.featured ? featuredClasses : standardClasses}`;
  const metaClasses =
    "font-mono text-[10px] leading-[1.3] tracking-[0.03em]";

  return (
    <article className={cardClasses}>
      <small className={metaClasses}>{item.eyebrow}</small>
      <div className="min-w-0 self-end py-[42px] max-[900px]:py-9">
        <h3 className="m-0 text-[clamp(34px,3.4vw,46px)] leading-none font-bold tracking-[-0.055em]">
          {item.company}
        </h3>
        <p className="mt-5 mb-0 max-w-[390px] leading-[1.55]">
          {item.description}
        </p>
      </div>
      <small className={metaClasses}>{item.period}</small>
    </article>
  );
}
