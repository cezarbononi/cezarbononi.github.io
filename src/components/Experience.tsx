import { useState } from "react";
import Reveal from "./Reveal";
import { type CompanySignal } from "../content/i18n";
import { useLanguage } from "../hooks/useLanguage";

type CompanySignalProps = {
  signal: CompanySignal;
  compact?: boolean;
};

function CompanySignalMark({ signal, compact = false }: CompanySignalProps) {
  return (
    <div className={`cy-company-signal ${compact ? "cy-company-signal-compact" : ""}`}>
      {signal.src ? (
        <img src={signal.src} alt={signal.alt} loading="lazy" decoding="async" />
      ) : (
        <span aria-label={signal.alt}>{signal.initials}</span>
      )}
    </div>
  );
}

export default function Experience() {
  const { content } = useLanguage();
  const [showEarlyCareer, setShowEarlyCareer] = useState(false);

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

        <div className="cy-experience-list">
          {content.experience.featured.map((company, index) => (
            <Reveal
              key={company.company}
              delay={index * 0.05}
              className="cy-experience-card"
            >
              <div className="cy-experience-company">
                <CompanySignalMark signal={company.signal} />
                <div>
                  <h3>{company.company}</h3>
                  <p>
                    {company.type} · {company.location}
                  </p>
                </div>
              </div>

              <div className="cy-experience-roles">
                {company.roles.map((role) => (
                  <article key={`${company.company}-${role.period}`}>
                    <div className="cy-experience-period">{role.period}</div>
                    <h4>{role.title}</h4>
                    <p>{role.body}</p>
                    <div className="mt-4 flex flex-wrap gap-[7px]">
                      {role.tags.map((tag) => (
                        <span key={tag} className="cy-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}

                {company.projects ? (
                  <div className="cy-project-chips">
                    {company.projects.map((project) => (
                      <span key={project}>{project}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="cy-early-career">
          <button
            type="button"
            className="cy-early-career-toggle"
            aria-expanded={showEarlyCareer}
            onClick={() => setShowEarlyCareer((value) => !value)}
          >
            <span>{content.experience.earlyCareer.label}</span>
            <strong>
              {showEarlyCareer
                ? content.experience.earlyCareer.expandedLabel
                : content.experience.earlyCareer.collapsedLabel}
            </strong>
          </button>

          {showEarlyCareer ? (
            <div className="cy-early-career-list">
              {content.experience.earlyCareer.items.map((item) => (
                <article key={`${item.company}-${item.period}`} className="cy-early-career-item">
                  <CompanySignalMark signal={item.signal} compact />
                  <div>
                    <div className="cy-experience-period">{item.period}</div>
                    <h4>{item.role}</h4>
                    <div className="cy-early-company">{item.company}</div>
                    <p>{item.body}</p>
                    <div className="mt-3 flex flex-wrap gap-[7px]">
                      {item.tags.map((tag) => (
                        <span key={tag} className="cy-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal className="cy-lab-card">
          <CompanySignalMark signal={content.experience.lab.signal} />
          <div>
            <div className="cy-experience-period">{content.experience.lab.period}</div>
            <h3>{content.experience.lab.title}</h3>
            <div className="cy-lab-place">{content.experience.lab.place}</div>
            <p>{content.experience.lab.body}</p>
            <div className="mt-4 flex flex-wrap gap-[7px]">
              {content.experience.lab.tags.map((tag) => (
                <span key={tag} className="cy-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
