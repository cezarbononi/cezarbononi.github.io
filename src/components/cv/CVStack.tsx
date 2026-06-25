type CVStackProps = {
  title: string;
  items: string[];
};

export default function CVStack({ title, items }: CVStackProps) {
  return (
    <section className="cv-section cv-stack">
      <h2>{title}</h2>
      <div>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
