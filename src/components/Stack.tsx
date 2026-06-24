import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function Stack() {
  const { content } = useLanguage();

  return (
    <section
      id="stack"
      className="relative z-10 border-t border-cyber-purple/25 bg-[rgba(10,10,15,0.5)]"
    >
      <div className="cy-container py-[clamp(54px,8vw,100px)]">
        <div className="mb-[30px] flex flex-wrap items-center gap-[clamp(18px,2.6vw,30px)]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
            {content.stack.kicker}
          </span>
          <h2 className="cy-section-title text-[clamp(28px,4.6vw,56px)]">
            {content.stack.heading}
          </h2>
        </div>

        <Reveal className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-px border border-cyber-purple/20 bg-cyber-purple/20">
          {content.stack.items.map((skill) => (
            <div key={skill} className="cy-stack-cell">
              {skill}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
