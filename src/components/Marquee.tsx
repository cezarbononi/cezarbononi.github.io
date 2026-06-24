import { useLanguage } from "../hooks/useLanguage";

export default function Marquee() {
  const { content } = useLanguage();

  return (
    <div
      className="cy-marquee-strip relative z-10 overflow-hidden border-y border-cyber-purple/30 bg-[rgba(11,11,16,0.6)] py-3.5"
      aria-label={content.marquee}
    >
      <div className="cy-marquee-track">
        <span className="pr-8">{content.marquee}</span>
        <span className="pr-8" aria-hidden="true">
          {content.marquee}
        </span>
      </div>
    </div>
  );
}
