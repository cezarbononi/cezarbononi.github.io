import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { useLanguage } from "../hooks/useLanguage";
import type { SiteItem } from "../content/i18n";
import avellen from "../assets/projects/avellen.jpg";
import cabeloliso from "../assets/projects/cabeloliso.jpg";
import castherm from "../assets/projects/castherm.jpg";
import anacarolinatrama from "../assets/projects/anacarolinatrama.jpg";

const screenshots: Record<SiteItem["slug"], string> = {
  avellen,
  cabeloliso,
  castherm,
  anacarolinatrama,
};

export default function Sites() {
  const { content } = useLanguage();
  const { sites } = content;

  return (
    <section
      id="sites"
      className="relative z-10 mx-auto max-w-cyber px-[26px] pb-[clamp(54px,8vw,100px)] pt-[clamp(20px,3vw,40px)]"
    >
      <div className="mb-4 flex flex-wrap items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
          {sites.kicker}
        </span>
        <h2 className="cy-section-title text-[clamp(30px,5vw,64px)]">
          <ScrambleText text={sites.heading} />
        </h2>
      </div>
      <p className="mb-[34px] max-w-[62ch] text-sm leading-[1.6] text-cyber-text/65">
        {sites.lead}
      </p>

      <Reveal className="cy-sites-grid">
        {sites.items.map((site) => (
          <a
            key={site.slug}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cy-site-card"
            aria-label={`${sites.visit}: ${site.name} (${site.domain})`}
          >
            <div className="cy-site-browser" aria-hidden="true">
              <span className="cy-site-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="cy-site-url">{site.domain}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-cyber-cyan/70">
                {site.no}
              </span>
            </div>

            <div className="cy-site-shot">
              <img
                src={screenshots[site.slug]}
                alt={`Screenshot: ${site.name}`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="cy-site-body">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyber-cyan/75">
                {site.category}
              </div>
              <div className="mt-2 flex items-start justify-between gap-4">
                <h3 className="font-display text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.08] text-cyber-strong">
                  {site.name}
                </h3>
                <span className="cy-card-arrow mt-1 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-cyber-text/60">
                  {sites.visit} ↗
                </span>
              </div>
              <p className="mt-3 text-sm leading-[1.5] text-cyber-text/65">
                {site.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-[7px]">
                {site.tags.map((tag) => (
                  <span key={tag} className="cy-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
