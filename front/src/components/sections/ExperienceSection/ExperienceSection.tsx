import type { PortfolioContent } from "@/domain/portfolio/types";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceSectionProps {
  readonly experience: PortfolioContent["experience"];
}

export function ExperienceSection({
  experience
}: ExperienceSectionProps) {
  return (
    <Container
      as="section"
      className="relative py-[100px] max-[580px]:py-[72px]"
    >
      <span id="work" className="absolute top-0" aria-hidden="true" />
      <SectionHeading intro={experience} />
      <div className="mt-[42px] grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {experience.items.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </Container>
  );
}
