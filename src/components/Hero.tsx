import Reveal from "./Reveal";
import ProfileHud from "./ProfileHud";
import { contactLinks } from "../content/links";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section className="cy-hero-frame relative z-10 mx-auto max-w-cyber px-[26px] pb-[30px] pt-[clamp(34px,7vw,80px)]">
      <div className="cy-hero-status mb-7 flex flex-wrap justify-between gap-4 font-mono text-[11px] tracking-[0.18em] text-cyber-cyan/80">
        <span>[ SYS://CEZAR_BONONI ]</span>
        <span className="hidden min-[620px]:inline">
          STATUS: <span className="cy-status-online text-cyber-purple">ONLINE</span>{" "}
          · BUILD 2026.6
        </span>
      </div>

      <div className="cy-hero-layout">
        <Reveal className="cy-hero-title-block">
          <p className="mb-[18px] font-mono text-xs uppercase tracking-[0.28em] text-cyber-purple">
            {content.hero.role}
          </p>
          <h1 className="cy-hero-title cy-glitch" data-text={"Cezar\nBononi"}>
            Cezar
            <br />
            Bononi
          </h1>
        </Reveal>

        <Reveal
          delay={0.08}
          className="cy-hero-intro mt-7 flex flex-wrap items-start gap-x-10 gap-y-5"
        >
          <p className="max-w-[540px] text-[clamp(16px,2.2vw,22px)] leading-[1.4] text-cyber-text">
            {content.hero.sub}
          </p>
          <p className="max-w-[420px] border-l-2 border-cyber-cyan pl-3.5 font-mono text-[13px] leading-[1.7] text-cyber-cyan/85">
            {content.hero.manifesto}
          </p>
        </Reveal>

        <Reveal delay={0.18} className="cy-profile-reveal">
          <ProfileHud />
        </Reveal>

        <Reveal delay={0.14} className="cy-hero-actions mt-[34px] flex flex-wrap gap-3">
          <a href="#work" className="cy-btn-primary">
            ▸ {content.hero.workButton}
          </a>
          <a
            href="https://www.linkedin.com/in/cezar-bononi/"
            target="_blank"
            rel="noopener noreferrer"
            className="cy-btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cezarbononi"
            target="_blank"
            rel="noopener noreferrer"
            className="cy-btn-ghost"
          >
            GitHub
          </a>
          <a
            href="#"
            className="cy-btn-ghost"
            title={content.hero.cvTitle}
            onClick={(event) => event.preventDefault()}
          >
            {content.hero.cvButton}
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cy-btn-ghost"
            aria-label={content.hero.whatsappButton}
          >
            {content.hero.whatsappButton}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
