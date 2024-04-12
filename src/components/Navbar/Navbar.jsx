import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
