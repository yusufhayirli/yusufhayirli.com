import type { CommerceContent } from "@/domain/portfolio/types";
import { Container } from "@/components/ui/Container/Container";
import { ImpactCard } from "./ImpactCard";

interface CommerceSectionProps {
  readonly commerce: CommerceContent;
}

export function CommerceSection({ commerce }: CommerceSectionProps) {
  return (
    <section
      className="overflow-hidden border-y border-line bg-paper text-ink"
      id="commerce"
    >
      <Container>
        <div className="grid min-h-[760px] grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] grid-rows-[1fr_auto] items-center gap-x-[clamp(48px,5vw,84px)] gap-y-8 py-16 max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:grid-rows-none max-[900px]:gap-y-12 max-[900px]:py-20 max-[581px]:gap-y-10 max-[581px]:py-[70px]">
          <div className="min-w-0 self-center">
            <div className="font-mono text-[10px] leading-[1.3] tracking-[0.12em] text-teal">
              {commerce.eyebrow}
            </div>
            <h2 className="my-5 text-[clamp(64px,7.6vw,116px)] leading-[0.82] font-bold tracking-[-0.075em] max-[900px]:max-w-[680px] max-[581px]:my-4 max-[581px]:text-[52px] max-[581px]:leading-[0.88] max-[581px]:tracking-[-0.055em]">
              {commerce.title.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="m-0 max-w-[470px] text-[17px] leading-[1.65] text-muted max-[581px]:text-[15px]">
              {commerce.description}
            </p>
          </div>

          <div className="relative min-h-[580px] min-w-0 self-center max-[900px]:min-h-[520px] max-[581px]:grid max-[581px]:min-h-0 max-[581px]:gap-3">
            {commerce.impacts.map((item, index) => (
              <ImpactCard key={item.eyebrow} item={item} index={index} />
            ))}
          </div>

          <div
            className="col-span-2 flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-[10px] leading-[1.3] tracking-[0.08em] text-teal max-[900px]:col-span-1"
            aria-label="Selected client work"
          >
            {commerce.clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
