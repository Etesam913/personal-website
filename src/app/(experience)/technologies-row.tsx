export default function TechnologiesRow({
  technologies,
}: {
  technologies: string;
}) {
  return (
    <p className="technology-row">
      <strong className="technology-label">Technologies:</strong>{" "}
      {technologies}
    </p>
  );
}
