import type { ContactContent } from "@/domain/portfolio/types";

interface ContactFooterProps {
  readonly contact: ContactContent;
}

export function ContactFooter({ contact }: ContactFooterProps) {
  const emailAddress = "yusufhayirli@gmail.com";

  return (
    <footer
      className="group relative flex min-h-[65vh] items-start justify-center border-t border-line bg-paper px-5 pt-[88px] pb-[72px] text-center text-ink max-[580px]:min-h-[58vh] max-[580px]:px-[14px] max-[580px]:pt-[70px] max-[580px]:pb-[58px]"
      id="contact"
    >
      <span
        aria-hidden="true"
        className="absolute top-[-3px] left-1/2 h-[6px] w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,var(--coral)_0_33.333%,var(--teal)_33.333%_66.666%,var(--sky)_66.666%)] transition-[width] duration-[350ms] ease-[ease] group-hover:w-[240px] max-[580px]:w-[120px] max-[580px]:group-hover:w-[150px]"
      />
      <div className="flex w-full max-w-[1100px] flex-col items-center">
        <div className="mb-7 font-mono text-[10px] leading-[1.3] tracking-[0.12em] text-teal max-[580px]:mb-[22px]">
          {contact.eyebrow}
        </div>
        <h2 className="mt-0 mb-[45px] text-[clamp(72px,11vw,170px)] leading-[0.78] font-bold tracking-[-0.085em] tr:text-[clamp(66px,9vw,132px)] tr:leading-[0.9] tr:tracking-[-0.052em] max-[580px]:text-[70px] max-[580px]:tr:text-[56px] max-[580px]:tr:leading-[0.94]">
          <span className="block">{contact.title[0]}</span>
          <em className="block text-teal not-italic">{contact.title[1]}</em>
        </h2>
        <p className="m-0 text-muted">{contact.description}</p>
        <a
          className="mt-[22px] border-b-2 border-coral pb-[7px] text-teal no-underline transition-transform duration-[250ms] ease-[ease] hover:translate-y-[-4px]"
          href={`mailto:${emailAddress}?subject=${encodeURIComponent("Start a conversation")}`}
          aria-label={contact.linkAriaLabel}
        >
          {contact.linkLabel}
        </a>
        <div className="mt-10 text-[10px] font-medium uppercase tracking-[0.18em] text-muted max-[580px]:mt-[24px]">
          Copyright © 2026 Yusuf HAYIRLI
        </div>
      </div>
    </footer>
  );
}
