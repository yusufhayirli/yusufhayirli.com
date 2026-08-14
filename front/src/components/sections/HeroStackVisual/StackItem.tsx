import type { HeroStackItem } from "@/domain/portfolio/types";
import styles from "./HeroStackVisual.module.scss";

interface StackItemProps {
  readonly item: HeroStackItem;
  readonly location: string;
}

export function StackItem({ item, location }: StackItemProps) {
  const classes = [styles.item, styles[item.variant]].join(" ");

  return (
    <span className={classes}>
      <span className={styles.copy}>
        <span className={styles.eyebrow}>{item.eyebrow}</span>
        <strong>
          {item.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </strong>
        <span className={styles.details}>
          {item.details.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
        {item.variant === "card" ? (
          <span className={styles.location}>{location}</span>
        ) : null}
      </span>
    </span>
  );
}
