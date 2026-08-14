import type { HeroContent } from "@/domain/portfolio/types";
import { Container } from "@/components/ui/Container/Container";
import { HeroStackVisual } from "@/components/sections/HeroStackVisual/HeroStackVisual";

interface HeroSectionProps {
  readonly hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <Container
      as="section"
      className="grid min-h-[650px] grid-cols-[1.05fr_0.95fr] items-center max-[900px]:grid-cols-1 max-[900px]:pt-[65px] max-[900px]:pb-[25px]"
    >
      <div>
        <h1 className="m-0 text-[clamp(46px,4.8vw,76px)] leading-[0.98] font-bold tracking-[-0.045em] tr:text-[clamp(44px,4.5vw,70px)] tr:leading-none tr:tracking-[-0.035em] max-[580px]:text-[36px] max-[580px]:leading-none max-[580px]:tr:text-[33px] max-[580px]:tr:leading-[1.03]">
          <span className="block">{hero.title[0]}</span>
          <em className="block text-teal not-italic">{hero.title[1]}</em>
          <span className="block">{hero.title[2]}</span>
        </h1>
        <p className="mt-6 mb-[17px] max-w-[520px] text-[19px] leading-[1.55] max-[580px]:text-base">
          {hero.description}
        </p>
        <a
          className="inline-block border-b-2 border-coral pb-[7px] text-ink no-underline transition-[color,transform] duration-[180ms] ease-[ease] hover:translate-y-[-2px] hover:text-teal"
          href="#work"
        >
          {hero.linkLabel}
        </a>
      </div>
      <HeroStackVisual hero={hero} />
    </Container>
  );
}
