import type { SectionIntro } from "@/domain/portfolio/types";

interface SectionHeadingProps {
  readonly intro: SectionIntro;
}

export function SectionHeading({ intro }: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-2 items-end gap-[50px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
      <h2 className="m-0 text-[clamp(58px,7vw,95px)] leading-[0.88] font-bold tracking-[-0.07em] max-[580px]:text-[49px] max-[580px]:leading-[0.94] max-[580px]:tracking-[-0.055em]">
        {intro.title.map((line) => (
          <span className="block" key={line}>
            {line}
          </span>
        ))}
      </h2>
      <p className="m-0 max-w-[540px] text-[17px] leading-[1.65] text-muted max-[580px]:text-[15px]">
        {intro.description}
      </p>
    </div>
  );
}
