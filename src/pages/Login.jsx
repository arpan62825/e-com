import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from "../assets/images/login-background-3.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    navigate("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in");
        handleNavigation();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });

    setLoading(true);
    formElement.reset();
  };

  return (
    <>
      <img className="login-background-image" src={backgroundImage} alt="" />
      <div className="login-card">
        <h1>Login</h1>
        <p>to your account</p>
        <form onSubmit={handleSubmit} id="login-form">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
          />
        </form>
        <button className="login-button" type="submit" form="login-form">
          {loading ? "Loading..." : "Login"}
        </button>
        <div className="signup-link">
          <p>
            Don't have an account?
            <Link to="../signup"> Sign up</Link>
          </p>
        </div>
        <div>
          {/* <section>
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember Me</label>
          </section>
          <Link to="/login">Forgot Password</Link> */}
        </div>
      </div>
    </>
  );
}
