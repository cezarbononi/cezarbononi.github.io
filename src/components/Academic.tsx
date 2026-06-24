import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function Academic() {
  const { content } = useLanguage();

  return (
    <section
      id="academic"
      className="cy-academic-section relative z-10 border-y border-cyber-purple/20 bg-[rgba(10,10,15,0.42)]"
    >
      <div className="cy-container py-[clamp(54px,8vw,100px)]">
        <div className="mb-[30px] flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
            {content.academic.kicker}
          </span>
          <h2 className="cy-section-title text-[clamp(28px,4.6vw,56px)]">
            {content.academic.heading}
          </h2>
        </div>

        <Reveal className="cy-academic-grid">
          {content.academic.items.map((item) => (
            <article key={`${item.period}-${item.institution}`} className="cy-academic-card">
              <div className="cy-academic-period">{item.period}</div>
              <div className="cy-academic-body">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyber-cyan/75">
                  {item.institution}
                </div>
                <h3 className="mt-3 font-display text-[clamp(19px,2.4vw,27px)] font-semibold uppercase leading-[1.08] text-cyber-strong">
                  {item.degree}
                </h3>
                <p className="mt-3 text-sm leading-[1.55] text-cyber-text/70">
                  {item.focus}
                </p>
                <div className="mt-4 flex flex-wrap gap-[7px]">
                  {item.tags.map((tag) => (
                    <span key={tag} className="cy-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
