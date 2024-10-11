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
        <li>
          <NavLink to="/">Accueille</NavLink>
        </li>
        <li>
          <NavLink to="/ordi bureau">Ordi bureau</NavLink>
        </li>
        <li>
          <NavLink to="/ordi portable">Ordi portable</NavLink>
        </li>
        <li>
          <NavLink to="/piece detachees">Piece détachées</NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
}
export default Navbar;
