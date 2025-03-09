import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundImage from "../assets/images/login-background-3.jpg";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      console.error("the passwords don't match");
      return;
    }
    e.preventDefault();

    setLoading(true);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const accountPassword = formData.get("accountPassword");
    console.log(email, accountPassword);

    formElement.reset();
    setPassword("");
    setConfirmPassword("");
  };

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
            name="accountPassword"
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
          <button name="customer" form="signup-form" type="submit">
            {loading ? "Signing up..." : "Customer"}
          </button>
          <button name="seller" form="signup-form" type="submit">
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
