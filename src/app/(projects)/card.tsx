import "./projects.css";
import CardVideo from "./card-video";
import CardLink from "./card-link";
import { getStarCount } from "../actions";

export default async function Card({
  projectName,
  videoPoster,
  videoSrc,
  href,
}: {
  projectName: string;
  videoPoster: string;
  videoSrc: string;
  href: string;
}) {
  const normalizedProjectName = projectName.toLowerCase().replace(" ", "-");

  const starCount = await getStarCount(normalizedProjectName);

  return (
    <>
      <div className="card">
        <a className="card-img-container">
          <CardVideo src={videoSrc} poster={videoPoster} />
        </a>
        <div className="card-header">
          <CardLink href={href} projectName={projectName} />
          <span className="card-start-count-row">
            <a
              style={{ color: "currentcolor" }}
              href={`https://github.com/etesam913/${normalizedProjectName}`}
            >
              <svg
                className="star-svg"
                stroke="currentColor"
                fill=""
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="24"
                width="24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </a>

            {starCount ?? ""}
          </span>
        </div>
      </div>
    </>
  );
}
