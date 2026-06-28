import Image from "next/image";
import "./about.css";

export const metadata = {
  title: "About | Etesam Ansari",
  description:
    "Contact links, resume, and background for software engineer Etesam Ansari.",
};

export default function About() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          alt=""
          priority
          src="https://storage.googleapis.com/etesam-public/Personal-Website/about-icon.png"
        />
        <h1>About Me</h1>
      </div>

      <div className="avatar-container">
        <Image
          priority
          fill
          src="https://storage.googleapis.com/etesam-public/Personal-Website/etesam-avatar.png"
          alt="Illustrated avatar of Etesam Ansari"
        />
      </div>
      <p>
        I am a software engineer who mainly uses HTML/CSS & JS, React.js, and
        Python.
      </p>
      <p>
        I graduated from Columbia University&apos;s Engineering School with a
        Bachelor of Science in Computer Science.
      </p>
      <p>When I am not coding, I like to play basketball.</p>

      <p className="email-me-link">
        <a href="mailto:etesamansari13@gmail.com">Email Etesam</a>
      </p>

      <h2 className="no-text-align">My Links</h2>
      <ul>
        <li>
          <a
            aria-label="Download Etesam Ansari resume PDF"
            href="https://storage.googleapis.com/etesam-public/Personal-Website/Etesam_Ansari_Resume.pdf"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            aria-label="Etesam Ansari on LinkedIn"
            href="https://www.linkedin.com/in/etesam-ansari/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            aria-label="Etesam Ansari on GitHub"
            href="https://www.github.com/Etesam913/"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            aria-label="Etesam Ansari on Twitter"
            href="https://twitter.com/EtesamAnsari"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            aria-label="Etesam Ansari on Reddit"
            href="https://www.reddit.com/user/Smogchalk/"
          >
            Reddit
          </a>
        </li>
        <li>
          <a
            aria-label="Etesam Ansari on CodeSandbox"
            href="https://codesandbox.io/u/Etesam913"
          >
            CodeSandbox
          </a>
        </li>
      </ul>
    </>
  );
}
