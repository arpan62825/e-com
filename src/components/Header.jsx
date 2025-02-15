import { NavLink, Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

export default function Header() {
  return (
    <header>
      <section className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </section>
      <nav>
        <NavLink
          to="about"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="resources"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          Resources
        </NavLink>
        <NavLink
          to="privacy-policy"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="terms-conditions"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          Terms & Conditions
        </NavLink>
      </nav>
    </header>
  );
}
