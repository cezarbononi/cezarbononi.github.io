import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";

export default function Header() {
  const { content } = useLanguage();
  const navItems = [
    { href: "#about", label: content.header.nav.about },
    { href: "#work", label: content.header.nav.work },
    { href: "#stack", label: content.header.nav.stack },
    { href: "#exp", label: content.header.nav.experience },
    { href: "#contact", label: content.header.nav.contact },
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
        {navItems.map((item) => (
          <a key={item.href} className="cy-nav-link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
