import NavbarLink from "./navbar-link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-desc">
        <h2 className="navbar-green">Etesam Ansari</h2>
        <h2>Software Developer</h2>
        <h2>Columbia Grad</h2>
      </div>
      <div className="navbar-links">
        <NavbarLink href="/">Projects</NavbarLink>
        <NavbarLink href="/experience">Experience</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </div>
    </nav>
  );
}
