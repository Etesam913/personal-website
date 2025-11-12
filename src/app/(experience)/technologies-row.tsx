export default function TechnologiesRow({
  technologies,
}: {
  technologies: string;
}) {
  return (
    <div className="technology-row">
      <strong className="technology-label">Technologies:&nbsp;</strong>{" "}
      {technologies}
    </div>
  );
}
