import NavbarLink from "./navbar-link";
import "./index.css";

export default function Navbar() {
  return (
    <nav aria-label="Primary">
      <div className="navbar-desc">
        <p className="navbar-green navbar-title">
          Etesam Ansari <span className="wave">👋</span>{" "}
        </p>
        <p className="navbar-subtitle">Software Engineer</p>
      </div>
      <div className="navbar-links">
        <NavbarLink href="/">Experience</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </div>
    </nav>
  );
}
