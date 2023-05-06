import Image from "next/image";
import './about.css'

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <div className="avatar-container">
        <Image fill src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/etesam-avatar.png" alt="avatar of Etesam" />
      </div>
      <p>
        I am a software developer who mainly uses HTML/CSS & JS, React.js, and Python.
      </p>
      <p>
        I graduated from Columbia University's Engineering School with a Bacherlors of Science in Computer Science.
      </p>
      <p>
        When I am not coding, I like to play basketball.
      </p>
    </main>
  );
}
