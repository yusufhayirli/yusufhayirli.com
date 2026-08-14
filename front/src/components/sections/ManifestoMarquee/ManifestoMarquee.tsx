import styles from "./ManifestoMarquee.module.scss";

interface ManifestoMarqueeProps {
  readonly items: readonly string[];
}

function MarqueeGroup({ items }: ManifestoMarqueeProps) {
  return (
    <span className="flex items-center gap-10 pr-10 max-[580px]:gap-6 max-[580px]:pr-6">
      {items.map((item) => (
        <span
          className="flex items-center gap-10 whitespace-nowrap max-[580px]:gap-6"
          key={item}
        >
          <b className="text-[clamp(30px,4.5vw,64px)] tracking-[-0.055em] max-[580px]:text-[28px]">
            {item}
          </b>
          <i className="text-[35px] text-coral not-italic" aria-hidden="true">
            +
          </i>
        </span>
      ))}
    </span>
  );
}

export function ManifestoMarquee({ items }: ManifestoMarqueeProps) {
  return (
    <section
      className="overflow-hidden border-y border-transparent bg-ink py-[42px] text-paper dark:border-line dark:bg-paper dark:text-ink max-[580px]:py-[27px]"
      aria-label={items.join(", ")}
    >
      <div className={[styles.track, "flex w-max"].join(" ")} aria-hidden="true">
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} />
      </div>
    </section>
  );
}
