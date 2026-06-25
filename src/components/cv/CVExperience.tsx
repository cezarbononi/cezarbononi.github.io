import { type CVRole } from "../../content/cv";

type CVExperienceProps = {
  title: string;
  roles: CVRole[];
  compact?: boolean;
};

export default function CVExperience({ title, roles, compact = false }: CVExperienceProps) {
  return (
    <section className={`cv-section ${compact ? "cv-section-compact" : ""}`}>
      <h2>{title}</h2>

      <div className="cv-role-list">
        {roles.map((role) => (
          <article key={`${role.company}-${role.period}`} className="cv-role">
            <div className="cv-role-heading">
              <div>
                <h3>{role.title}</h3>
                <strong>{role.company}</strong>
              </div>
              <p>
                {role.period}
                <span>{role.location}</span>
              </p>
            </div>

            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="cv-tag-row">
              {role.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
