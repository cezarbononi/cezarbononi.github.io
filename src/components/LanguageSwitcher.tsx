import { type Language } from "../content/i18n";
import { useLanguage } from "../hooks/useLanguage";

const options: Array<{ label: string; value: Language }> = [
  { label: "PT-BR", value: "pt" },
  { label: "EN-US", value: "en" },
];

export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage();

  return (
    <div
      className="flex overflow-hidden rounded-[2px] border border-cyber-purple/40 font-mono text-xs tracking-[0.08em]"
      aria-label="Language"
    >
      {options.map((option) => {
        const active = lang === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={`whitespace-nowrap px-[11px] py-[7px] transition-colors ${
              active
                ? "bg-gradient-to-br from-cyber-purple to-cyber-cyan font-bold text-cyber-bg"
                : "text-cyber-text/60 hover:text-cyber-cyan"
            }`}
            aria-pressed={active}
            onClick={() => setLanguage(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
