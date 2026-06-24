import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function AIWorkflow() {
  const { content } = useLanguage();

  return (
    <section
      id="workflow"
      className="cy-workflow-section relative z-10 border-t border-cyber-cyan/20"
    >
      <div className="cy-container py-[clamp(56px,8vw,104px)]">
        <div className="mb-[34px] grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.22fr)] lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
              {content.workflow.kicker}
            </span>
            <h2 className="cy-section-title mt-4 max-w-[880px] text-[clamp(30px,5.4vw,70px)]">
              {content.workflow.heading}
            </h2>
          </div>

          <p className="max-w-[520px] font-mono text-xs leading-[1.75] text-cyber-text/66 lg:justify-self-end">
            {content.workflow.lead}
          </p>
        </div>

        <Reveal className="cy-workflow-shell">
          <div className="cy-workflow-sequence">
            <span>PIPELINE://</span>
            <strong>{content.workflow.sequence}</strong>
          </div>

          <div className="cy-workflow-layout">
            <div className="cy-workflow-grid">
              {content.workflow.steps.map((step, index) => (
                <article key={step.label} className="cy-workflow-step">
                  <div className="cy-workflow-step-header">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step.label}</strong>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.body}</p>

                  <div className="mt-4 flex flex-wrap gap-[7px]">
                    {step.tags.map((tag) => (
                      <span key={tag} className="cy-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="cy-workflow-signals" aria-label="AI workflow signals">
              {content.workflow.signals.map((signal) => (
                <div key={signal.label} className="cy-workflow-signal">
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
