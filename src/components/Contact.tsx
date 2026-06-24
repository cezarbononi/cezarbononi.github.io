import Reveal from "./Reveal";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { content } = useLanguage();

  return (
    <section
      id="contact"
      className="cy-contact-section relative z-10 border-t border-cyber-cyan/40 bg-[rgba(8,8,12,0.7)]"
    >
      <div className="cy-container py-[clamp(60px,10vw,120px)]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyber-cyan">
            {content.contact.kicker}
          </span>
          <h2 className="cy-contact-title cy-glitch cy-glitch-slow mt-4">
            {content.contact.heading}
          </h2>
          <p className="mt-5 max-w-[540px] text-[clamp(15px,2vw,19px)] leading-[1.5] text-cyber-text/70">
            {content.contact.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:cezarbononi@gmail.com" className="cy-btn-primary">
              cezarbononi@gmail.com
            </a>
            <a href="#top" className="cy-btn-ghost">
              ← {content.contact.topButton}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
