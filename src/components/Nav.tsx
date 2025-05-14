import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom

export const Nav = () => (
  <nav style={{ padding: "1rem" }}>
    <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold" }}>Home</Link>
    <Link to="/saved">Potential Candidates</Link>
  </nav>
);