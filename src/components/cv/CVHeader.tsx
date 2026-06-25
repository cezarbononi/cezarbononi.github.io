import { type CVCopy } from "../../content/cv";

type CVHeaderProps = {
  cv: CVCopy;
};

export default function CVHeader({ cv }: CVHeaderProps) {
  return (
    <header className="cv-header">
      <div>
        <div className="cv-system-label">{cv.labels.page}</div>
        <h1>{cv.name}</h1>
        <p>{cv.headline}</p>
      </div>

      <address aria-label={cv.labels.contact}>
        <span>{cv.location}</span>
        <a href={`mailto:${cv.email}`}>{cv.email}</a>
        <a href={`https://${cv.linkedin}`}>{cv.linkedin}</a>
        <a href={`https://${cv.github}`}>{cv.github}</a>
        <a href={cv.whatsapp}>WhatsApp</a>
      </address>
    </header>
  );
}
