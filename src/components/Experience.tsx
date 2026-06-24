import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function Experience() {
  const { content } = useLanguage();

  return (
    <section id="exp" className="cy-section">
      <div className="cy-container">
        <div className="mb-3.5 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-purple">
            {content.experience.kicker}
          </span>
          <h2 className="cy-section-title text-[clamp(28px,4.6vw,56px)]">
            {content.experience.heading}
          </h2>
        </div>

        {content.experience.items.map((item, index) => (
          <Reveal
            key={`${item.period}-${item.role}`}
            delay={index * 0.05}
            className="grid gap-[clamp(16px,3vw,40px)] border-t border-cyber-purple/25 py-[clamp(20px,3vw,32px)] md:grid-cols-[minmax(120px,180px)_1fr]"
          >
            <div className="font-mono text-[13px] uppercase tracking-[0.08em] text-cyber-cyan">
              {item.period}
            </div>
            <div>
              <h3 className="font-display text-[clamp(19px,2.6vw,28px)] font-semibold leading-[1.1] text-cyber-strong">
                {item.role}
              </h3>
              <div className="mt-1.5 font-mono text-xs uppercase tracking-[0.08em] text-cyber-purple">
                {item.place}
              </div>
              <p className="mt-3 max-w-[640px] text-sm leading-[1.55] text-cyber-text/70">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
