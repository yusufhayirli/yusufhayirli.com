import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  readonly as?: ElementType;
  readonly className?: string;
  readonly children: ReactNode;
}

export function Container({
  as: Component = "div",
  className = "",
  children
}: ContainerProps) {
  const classes = [
    "mx-auto w-[calc(100%_-_40px)] max-w-[1320px] max-[580px]:w-[calc(100%_-_28px)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
