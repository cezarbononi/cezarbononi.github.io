import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = "";

      document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
        if (section.getBoundingClientRect().top <= line) {
          current = section.id;
        }
      });

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export default function Header() {
  const { content } = useLanguage();
  const activeSection = useActiveSection();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const navItems = [
    { id: "about", label: content.header.nav.about },
    { id: "work", label: content.header.nav.work },
    { id: "sites", label: content.header.nav.sites },
    { id: "exp", label: content.header.nav.experience },
    { id: "stack", label: content.header.nav.stack },
    { id: "academic", label: content.header.nav.academic },
    { id: "contact", label: content.header.nav.contact },
  ];

  return (
    <header className="cy-header sticky top-0 z-40 flex items-center justify-between border-b border-cyber-purple/30 bg-cyber-bg/70 px-[26px] py-3.5 backdrop-blur-[10px]">
      <a
        href="#top"
        className="flex items-center gap-2.5 font-mono text-xs tracking-[0.16em]"
        aria-label="Cezar Bononi"
      >
        <span className="cy-brand-chip grid h-[26px] w-[26px] place-items-center rounded-[2px] bg-gradient-to-br from-cyber-purple to-cyber-cyan font-bold text-cyber-bg">
          CB
        </span>
        <span className="hidden whitespace-nowrap text-cyber-text/60 min-[620px]:inline">
          ← {content.header.index}
        </span>
      </a>

      <nav
        className="hidden items-center gap-6 font-mono text-xs tracking-[0.12em] text-cyber-text/70 min-[781px]:flex"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive = item.id === activeSection;

          return (
            <a
              key={item.id}
              className={`cy-nav-link${isActive ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <LanguageSwitcher />

      <motion.div
        className="cy-scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
    </header>
  );
}
