import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src="/assets/header-logo.svg" alt="Kasa Logo" />
      </NavLink>
      <Navbar />
    </header>
  );
}

export default Header;
