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
  const accentVariant = { sky: 1, coral: 2, teal: 3 } as const;
  const variant = item.accent
    ? accentVariant[item.accent]
    : (index % 3) + 1;
  const classes = [
    styles.card,
    styles["variant" + variant],
    item.brand ? styles["brand-" + item.brand] : null
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} data-brand={item.brand}>
      {item.brand === "lorearn" ? (
        <div className={styles.collage} aria-hidden="true">
          <span className={styles.window1}>
            <i />
            <i />
            <i />
            <em />
            <em />
          </span>
          <span className={styles.window2}>
            <i />
            <i />
            <i />
            <em />
            <em />
            <em />
          </span>
          <span className={styles.window3}>
            <i />
            <i />
            <i />
            <em />
          </span>
        </div>
      ) : null}
      <small>{item.status}</small>
      <div className={styles.body}>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div
          className={styles.detail}
          data-open={item.link ? true : open}
          id={detailId}
        >
          <p>{item.detail}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.linkLabel ?? inspectLabel}
          </a>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailId}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? closeLabel : inspectLabel}
          </button>
        )}
      </div>
    </article>
  );
}
