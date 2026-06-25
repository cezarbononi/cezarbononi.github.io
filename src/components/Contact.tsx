import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { contactLinks } from "../content/links";
import { useLanguage } from "../hooks/useLanguage";

type CopyStatus = "idle" | "copied" | "failed";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-999px";
  textarea.style.left = "-999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const copied = document.execCommand("copy");

    if (!copied) {
      throw new Error("Clipboard fallback failed");
    }
  } finally {
    document.body.removeChild(textarea);
  }
}

export default function Contact() {
  const { content } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (copyStatus === "idle") {
      return;
    }

    const timeout = window.setTimeout(() => setCopyStatus("idle"), 1800);

    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const handleCopyEmail = async () => {
    try {
      await copyText(content.contact.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  const feedback =
    copyStatus === "copied"
      ? content.contact.copiedEmail
      : copyStatus === "failed"
        ? content.contact.copyFailed
        : "";

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
            <a href={`mailto:${content.contact.email}`} className="cy-btn-primary">
              {content.contact.email}
            </a>
            <button
              type="button"
              className="cy-btn-ghost cy-copy-email"
              aria-label={content.contact.copyEmail}
              onClick={handleCopyEmail}
            >
              {content.contact.copyEmail}
            </button>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cy-btn-ghost"
              aria-label={content.contact.whatsappButton}
            >
              {content.contact.whatsappButton}
            </a>
            <a href="#top" className="cy-btn-ghost">
              ← {content.contact.topButton}
            </a>
          </div>
          <div className="cy-copy-feedback" aria-live="polite" aria-atomic="true">
            {feedback}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
