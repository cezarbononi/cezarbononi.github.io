import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  type Language,
  portfolioContent,
  type PortfolioCopy,
} from "../content/i18n";

const STORAGE_KEY = "cb_lang";

type LanguageContextValue = {
  lang: Language;
  content: PortfolioCopy;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : "pt";
  } catch {
    return "pt";
  }
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((language: Language) => {
    setLang(language);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Browsers can block storage in strict privacy contexts.
    }

    document.documentElement.lang = portfolioContent[lang].meta.documentLang;
    document.title = portfolioContent[lang].meta.title;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      content: portfolioContent[lang],
      setLanguage,
    }),
    [lang, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
