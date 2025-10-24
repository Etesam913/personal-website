import NavbarLink from "./navbar-link";
import "./index.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-desc">
        <h2 className="navbar-green">
          Etesam Ansari <span className="wave">👋</span>{" "}
        </h2>
        <h2>Software Engineer</h2>
      </div>
      <div className="navbar-links">
        <NavbarLink href="/">Experience</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </div>
    </nav>
  );
}
