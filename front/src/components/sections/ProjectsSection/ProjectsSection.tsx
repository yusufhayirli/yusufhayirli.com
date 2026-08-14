import type { ProjectsContent } from "@/domain/portfolio/types";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsSection.module.scss";

interface ProjectsSectionProps {
  readonly projects: ProjectsContent;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Container as="section" className={styles.section}>
      <span id="projects" className={styles.anchor} aria-hidden="true" />
      <SectionHeading intro={projects} />
      <div className={styles.grid}>
        {projects.items.map((item, index) => (
          <ProjectCard
            key={item.title}
            item={item}
            index={index}
            inspectLabel={projects.inspectLabel}
            closeLabel={projects.closeLabel}
          />
        ))}
      </div>
    </Container>
  );
}
