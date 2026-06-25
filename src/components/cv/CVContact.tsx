import { type CVCopy } from "../../content/cv";

type CVContactProps = {
  cv: CVCopy;
};

export default function CVContact({ cv }: CVContactProps) {
  return (
    <footer className="cv-footer">
      <span>{cv.name}</span>
      <span>{cv.headline}</span>
      <span>{cv.email}</span>
    </footer>
  );
}
