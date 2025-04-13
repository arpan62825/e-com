import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import { Search, ShoppingBag, Person } from "@mui/icons-material";
// import PersonIcon from "@mui/icons-material/person";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user && user.emailVerified ? user : null);
      } else {
        console.log("You are currently not signed in");
      }
    });
  }, []);

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
            {user ? <Person /> : "Login"}
          </Link>
        </nav>
      </section>
    </header>
  );
}
