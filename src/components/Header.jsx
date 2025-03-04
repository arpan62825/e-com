import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
// import SearchIcon from '@mui/icons-material/Search';
import { Search, ShoppingBag } from "@mui/icons-material";

export default function Header() {
  return (
    <header>
      <section className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </section>
      <section className="category">
        <nav>
          <NavLink
            to="men"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Men
          </NavLink>
          <NavLink
            to="Women"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Women
          </NavLink>
          <NavLink
            to="Kids"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Kids
          </NavLink>
          <NavLink
            to="Gifts"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Gifts
          </NavLink>
        </nav>
      </section>
      <section className="icons">
        <nav>
          <NavLink
            to="."
            className={({ isActive }) => {
              isActive ? "active-link" : "";
            }}
          >
            <Search />
          </NavLink>
          <NavLink
            to="."
            className={({ isActive }) => {
              isActive ? "active-link" : "";
            }}
          >
            <ShoppingBag />
          </NavLink>
          <NavLink
            to="."
            className={({ isActive }) => {
              isActive ? "active-link" : "";
            }}
          >
            Login
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
