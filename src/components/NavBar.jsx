import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;