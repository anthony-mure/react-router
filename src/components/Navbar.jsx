import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex">
        <li className="me-3">
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/About">Chi siamo</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/Products">Prodotti</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar
