import { useEffect, useMemo } from "react";
import CVContact from "../components/cv/CVContact";
import CVEducation from "../components/cv/CVEducation";
import CVExperience from "../components/cv/CVExperience";
import CVHeader from "../components/cv/CVHeader";
import CVStack from "../components/cv/CVStack";
import CVSummary from "../components/cv/CVSummary";
import { cvContent } from "../content/cv";
import { type Language } from "../content/i18n";

function getCVLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const params = new URLSearchParams(window.location.search);
  return params.get("lang") === "en" ? "en" : "pt";
}

export default function CVPage() {
  const lang = getCVLanguage();
  const cv = cvContent[lang];
  const altLang = lang === "pt" ? "en" : "pt";

  const downloadHref = useMemo(() => {
    return `/cv/${cv.fileName}`;
  }, [cv.fileName]);

  useEffect(() => {
    document.documentElement.lang = cv.lang;
    document.title = `${cv.name} | CV | ${cv.headline}`;
  }, [cv]);

  return (
    <main className="cv-shell">
      <div className="cv-screen-toolbar" aria-label="CV actions">
        <a href="/" className="cv-toolbar-link">
          PORTFOLIO
        </a>
        <a href={`/cv?lang=${altLang}`} className="cv-toolbar-link">
          {altLang === "pt" ? "PT-BR" : "EN-US"}
        </a>
        <a href={downloadHref} className="cv-toolbar-link" download>
          PDF
        </a>
      </div>

      <article className="cv-page" aria-label={`${cv.name} CV`}>
        <CVHeader cv={cv} />
        <CVSummary cv={cv} />
        <CVExperience title={cv.labels.experience} roles={cv.roles} />
        <div className="cv-two-column">
          <CVStack title={cv.labels.stack} items={cv.stack} />
          <CVEducation title={cv.labels.education} items={cv.education} />
        </div>
        <CVExperience title={cv.labels.earlyCareer} roles={cv.earlyCareer} compact />
        <CVContact cv={cv} />
      </article>
    </main>
  );
}
