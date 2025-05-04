import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Search, ShoppingBag, Person } from "@mui/icons-material";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header({ isSeller }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
      <section className="moto">
        <p>Where Elegance Meets Earth.</p>
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
            to={user ? (isSeller ? "/dashboard" : "/profile") : "/login"}
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
