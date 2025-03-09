import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundImage from "../assets/images/login-background-3.jpg";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
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
        <div className="login-signup-btn">
          <Link to="../signup">
            <button>Sign up</button>
          </Link>
          <button type="submit" form="login-form">
            {loading ? "Loading..." : "Login"}
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
