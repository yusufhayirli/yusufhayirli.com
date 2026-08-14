"use client";

import { useState } from "react";
import type { ProjectItem } from "@/domain/portfolio/types";
import styles from "./ProjectsSection.module.scss";

interface ProjectCardProps {
  readonly item: ProjectItem;
  readonly inspectLabel: string;
  readonly closeLabel: string;
  readonly index: number;
}

export function ProjectCard({
  item,
  inspectLabel,
  closeLabel,
  index
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const detailId = "project-detail-" + index;
  const classes = [styles.card, styles["variant" + ((index % 3) + 1)]]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      <small>{item.status}</small>
      <div className={styles.body}>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div
          className={styles.detail}
          data-open={open}
          id={detailId}
        >
          <p>{item.detail}</p>
        </div>
      </div>
      <div>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? closeLabel : inspectLabel}
        </button>
      </div>
    </article>
  );
}
