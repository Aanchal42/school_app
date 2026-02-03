// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#2563eb", color: "#fff" }}>
      <h3>School App</h3>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
          Add School
        </Link>
        <Link to="/schools" style={{ color: "#fff" }}>
          Show Schools
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
