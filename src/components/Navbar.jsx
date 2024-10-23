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
            to="/ordi bureau"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Ordi bureau
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ordi portable"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Ordi portable
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/piece detachees"
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
              to="/login register"
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
