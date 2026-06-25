import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function Work() {
  const { content } = useLanguage();

  return (
    <section
      id="work"
      className="relative z-10 mx-auto max-w-cyber px-[26px] pb-[clamp(54px,8vw,100px)] pt-[clamp(20px,3vw,40px)]"
    >
      <div className="mb-[34px] flex flex-wrap items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-purple">
          {content.work.kicker}
        </span>
        <h2 className="cy-section-title text-[clamp(30px,5vw,64px)]">
          {content.work.heading}
        </h2>
      </div>

      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {content.work.items.map((work) => (
          <article
            key={work.no}
            className="cy-work-card"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-cyber-cyan/80">
              <span>{work.no}</span>
              <span className="cy-card-arrow">▸</span>
            </div>
            <h3 className="mt-[18px] font-display text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.08] text-cyber-strong">
              {work.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.5] text-cyber-text/65">
              {work.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-[7px]">
              {work.tags.map((tag) => (
                <span key={tag} className="cy-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
