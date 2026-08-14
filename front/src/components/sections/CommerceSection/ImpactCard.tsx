import type { ImpactItem } from "@/domain/portfolio/types";

interface ImpactCardProps {
  readonly item: ImpactItem;
  readonly index: number;
}

const placements = [
  "left-0 top-0 z-10 rotate-[-0.7deg] max-[900px]:left-[2%]",
  "right-0 top-[180px] z-20 rotate-[0.8deg] max-[900px]:top-[150px]",
  "bottom-0 left-[7%] z-30 rotate-[-0.4deg] max-[900px]:left-[10%]"
] as const;

export function ImpactCard({ item, index }: ImpactCardProps) {
  const placement = placements[index % placements.length];

  return (
    <article
      className={[
        "group absolute grid min-h-[220px] w-[min(560px,82%)] grid-rows-[auto_1fr] overflow-hidden border border-line bg-paper p-6 text-ink shadow-[8px_8px_0_transparent] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:z-40 hover:-translate-y-2 hover:rotate-0 hover:border-teal hover:shadow-[8px_8px_0_var(--shadow)] max-[900px]:min-h-[210px] max-[900px]:w-[68%] max-[581px]:relative max-[581px]:inset-auto max-[581px]:z-auto max-[581px]:min-h-[220px] max-[581px]:w-full max-[581px]:rotate-0 max-[581px]:p-5",
        placement
      ].join(" ")}
    >
      <b className="font-mono text-[10px] leading-[1.3] tracking-[0.12em] text-teal">
        {item.eyebrow}
      </b>
      <div className="min-w-0 self-start pt-[18px]">
        <h3 className="mb-3 mt-0 text-[clamp(28px,2.6vw,38px)] leading-[1.02] font-bold tracking-[-0.05em] max-[581px]:text-[30px]">
          {item.title}
        </h3>
        <p className="m-0 leading-[1.55] text-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}
