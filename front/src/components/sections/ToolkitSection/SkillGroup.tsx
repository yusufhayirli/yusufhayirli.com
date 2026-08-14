import type { SkillGroup as SkillGroupModel } from "@/domain/portfolio/types";

const CHIP_BASE_CLASSES =
  "relative border border-line bg-transparent px-[13px] py-[10px] text-[13px] transition-[transform,background-color,color,border-color,box-shadow] duration-[240ms] ease-[ease] hover:z-[2] hover:shadow-[6px_6px_0_var(--shadow)] hover:[transform:translateY(-6px)_rotate(0deg)_scale(1.035)] max-[650px]:px-[11px] max-[650px]:py-[9px] max-[650px]:text-xs";

const CHIP_VARIANT_CLASSES = [
  "[transform:rotate(-0.35deg)] hover:border-teal hover:bg-teal hover:text-white",
  "[transform:rotate(0.35deg)] hover:border-coral hover:bg-coral hover:text-white",
  "[transform:rotate(-0.15deg)] hover:border-sky hover:bg-sky hover:text-[#142320]",
  "[transform:rotate(0.15deg)] hover:border-teal hover:bg-teal hover:text-white",
  "[transform:rotate(0.35deg)] hover:border-coral hover:bg-coral hover:text-white"
] as const;

interface SkillGroupProps {
  readonly group: SkillGroupModel;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <section className="grid grid-cols-[145px_minmax(0,1fr)] items-start gap-[14px] max-[650px]:grid-cols-1 max-[650px]:gap-2">
      <h3 className="mt-[10px] mb-0 font-mono text-[10px] leading-[1.3] tracking-[0.08em] text-teal uppercase max-[650px]:mt-0">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-[9px]">
        {group.items.map((skill, index) => (
          <span
            className={`${CHIP_BASE_CLASSES} ${CHIP_VARIANT_CLASSES[index % CHIP_VARIANT_CLASSES.length]}`}
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
