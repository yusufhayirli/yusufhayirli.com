import type { SkillGroup as SkillGroupModel } from "@/domain/portfolio/types";
import { Container } from "@/components/ui/Container/Container";
import { SkillGroup } from "./SkillGroup";

interface ToolkitSectionProps {
  readonly title: string;
  readonly groups: readonly SkillGroupModel[];
}

export function ToolkitSection({ title, groups }: ToolkitSectionProps) {
  return (
    <Container
      as="section"
      className="grid grid-cols-[minmax(250px,0.52fr)_minmax(0,1.48fr)] items-start gap-[42px] border-t border-line pt-[78px] pb-[96px] max-[900px]:grid-cols-1 max-[650px]:pt-[70px] max-[650px]:pb-[72px]"
    >
      <h2 className="m-0 text-[clamp(50px,5vw,68px)] leading-[0.95] font-bold tracking-[-0.06em] max-[650px]:text-[46px]">
        {title}
      </h2>
      <div className="grid gap-[23px]">
        {groups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Container>
  );
}
