import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.jpeg";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        {" "}
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li className="link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/produits"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Produits
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/piece-detachees"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Piece détachées
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <ul>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              login register
            </NavLink>
          </li>
        </ul>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
}
export default Navbar;
