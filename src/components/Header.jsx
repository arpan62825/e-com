import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Search, ShoppingBag, Person } from "@mui/icons-material";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header({ isSeller }) {
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user && user.emailVerified ? user : null);
      } else {
        console.log("You are currently not signed in");
      }
    });
  }, []);

  const handleSearchFocus = () => {
    document.getElementById("search-bar").focus();
  };

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
      {location.pathname === "/search-page" ? (
        <div className="search-bar-holder">
          <input
            type="text"
            placeholder="Search for items"
            className="search-bar"
            id="search-bar"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
      <section className="icons">
        <nav>
          <NavLink
            to="search-page"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            <span onClick={handleSearchFocus}>
              <Search searchText={searchText} />
            </span>
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            <ShoppingBag />
          </NavLink>
          <Link
            to={user ? (isSeller ? "/dashboard" : "/profile") : "/login"}
            className={({ isActive }) => {
              return isActive ? "active-link" : "inactive-link";
            }}
          >
            {user ? <Person /> : "Login"}
          </Link>
        </nav>
      </section>
    </header>
  );
}
