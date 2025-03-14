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
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            Men
          </NavLink>
          <NavLink
            to="Women"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            Women
          </NavLink>
          <NavLink
            to="Kids"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            Kids
          </NavLink>
          <NavLink
            to="Gifts"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            Gifts
          </NavLink>
        </nav>
      </section>
      <section className="icons">
        <nav>
          <NavLink
            to="search-page"
            className={({ isActive }) => {
              isActive ? "active-link" : "inactive-link";
            }}
          >
            <Search />
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) => {
              isActive ? "active-link" : "inactive-link";
            }}
          >
            <ShoppingBag />
          </NavLink>
          <Link
            to="/login"
            className={({ isActive }) => {
              isActive ? "active-link" : "inactive-link";
            }}
          >
            Login
          </Link>
        </nav>
      </section>
    </header>
  );
}
