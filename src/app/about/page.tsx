import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          alt="Icon of Me"
          priority
          src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/about-icon.png"
        />
        <h1>About Me</h1>
      </div>

      <div className="avatar-container">
        <Image
          priority
          fill
          src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/etesam-avatar.png"
          alt="avatar of Etesam"
        />
      </div>
      <p>
        I am a software developer who mainly uses HTML/CSS & JS, React.js, and
        Python.
      </p>
      <p>
        I graduated from Columbia University&apos;s Engineering School with a
        Bachelors of Science in Computer Science.
      </p>
      <p>When I am not coding, I like to play basketball.</p>
      <h2>My Links</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/etesam-ansari/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/Etesam913/">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/EtesamAnsari">Twitter</a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/Smogchalk/">Reddit</a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/Etesam913">Codesandbox</a>
        </li>
      </ul>
    </>
  );
}
