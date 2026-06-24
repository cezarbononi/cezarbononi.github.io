import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { content } = useLanguage();

  return (
    <section id="about" className="cy-section">
      <div className="cy-container grid gap-9 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,2fr)]">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-text/45">
          <div className="mb-1.5 text-cyber-cyan">{content.about.kicker}</div>
          {content.about.label}
        </div>

        <Reveal className="min-w-0">
          <h2 className="cy-section-title max-w-[850px] text-[clamp(26px,4vw,52px)]">
            {content.about.heading}
          </h2>
          <p className="mt-[22px] max-w-[680px] text-[clamp(15px,1.9vw,19px)] leading-[1.6] text-cyber-text/75">
            {content.about.body}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-px border border-cyber-purple/20 bg-cyber-purple/20">
            {content.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[140px] flex-1 bg-cyber-panel px-[22px] py-4"
              >
                <div className="font-display text-[32px] font-bold leading-none text-cyber-cyan">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-cyber-text/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
