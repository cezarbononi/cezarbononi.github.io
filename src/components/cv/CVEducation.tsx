import { type CVEducationItem } from "../../content/cv";

type CVEducationProps = {
  title: string;
  items: CVEducationItem[];
};

export default function CVEducation({ title, items }: CVEducationProps) {
  return (
    <section className="cv-section cv-education">
      <h2>{title}</h2>
      <div>
        {items.map((item) => (
          <article key={`${item.institution}-${item.period}`}>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <span>{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
