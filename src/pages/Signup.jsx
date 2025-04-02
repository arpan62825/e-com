import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import backgroundImage from "../assets/images/login-background-3.jpg";
import { auth } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      console.error("the passwords don't match");
      return;
    }
    e.preventDefault();

    setLoading(true);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");

    try {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          console.log("fetching data");
          handleNavigation(role);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    formElement.reset();
    setPassword("");
    setConfirmPassword("");
  };

  function handleNavigation(role) {
    if (role === "customer") {
      console.log("signing in as a customer");
      navigate(-2);
    } else if (role === "seller") {
      console.log("signing in as a seller");
      navigate("/dashboard");
    }
  }

  return (
    <>
      <img className="login-background-image" src={backgroundImage} alt="" />
      <div className="login-card">
        <h1>Sign up</h1>
        <p>with your email</p>
        <form id="signup-form" onSubmit={handleSubmit}>
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
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <input
            id="confirm_password"
            type="password"
            placeholder="confirm password"
            minLength={6}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
        </form>
        <p>Sign up as a:</p>
        <div className="login-signup-btn">
          <button
            onClick={() => setRole("customer")}
            name="customer"
            form="signup-form"
            type="submit"
          >
            {loading ? "Signing up..." : "Customer"}
          </button>
          <button
            onClick={() => setRole("seller")}
            name="seller"
            form="signup-form"
            type="submit"
          >
            {loading ? "Signing up..." : "Seller"}
          </button>
        </div>
        <div>
          <section>
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember Me</label>
          </section>
          <Link to="/login">Forgot Password</Link>
        </div>
      </div>
    </>
  );
}
