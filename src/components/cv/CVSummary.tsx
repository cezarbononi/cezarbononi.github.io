import { type CVCopy } from "../../content/cv";

type CVSummaryProps = {
  cv: CVCopy;
};

export default function CVSummary({ cv }: CVSummaryProps) {
  return (
    <section className="cv-section cv-summary">
      <h2>{cv.labels.summary}</h2>
      <p>{cv.summary}</p>

      <div className="cv-highlight-grid" aria-label={cv.labels.highlights}>
        {cv.highlights.map((highlight) => (
          <article key={highlight}>
            <span>SYS</span>
            <p>{highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
