"use client";

import { useState } from "react";
import type { HeroContent } from "@/domain/portfolio/types";
import { StackItem } from "./StackItem";
import styles from "./HeroStackVisual.module.scss";

interface HeroStackVisualProps {
  readonly hero: HeroContent;
}

export function HeroStackVisual({ hero }: HeroStackVisualProps) {
  const [expanded, setExpanded] = useState(false);
  const classes = [styles.art, expanded ? styles.expanded : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      type="button"
      aria-pressed={expanded}
      aria-label={expanded ? hero.fanOpenLabel : hero.fanClosedLabel}
      onClick={() => setExpanded((current) => !current)}
    >
      {hero.stacks.map((item) => (
        <StackItem key={item.variant} item={item} location={hero.location} />
      ))}
      <span className={styles.hint} aria-hidden="true">
        {expanded ? hero.fanOpenLabel : hero.fanClosedLabel}
      </span>
    </button>
  );
}
