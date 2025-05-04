import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backgroundImage from "../assets/images/login-background-3.jpg";
import { auth } from "../components/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function Signup({ setIsSeller }) {
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
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("verification email sent.");
            })
            .catch((error) => {
              console.log(error);
            });
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
      setIsSeller(false);
      console.log("signing in as a customer");
      navigate(-2);
    } else if (role === "seller") {
      setIsSeller(true);
      console.log("signing in as a seller");
      navigate("/dashboard");
    }
  }

  const checkVerificationStatus = async () => {
    try {
      auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        console.log("the email is verified.");
        handleNavigation(role);
      } else {
        window.alert("Your email is not verified, try again.");
        console.log("the email is not verified");
      }
    } catch (error) {
      console.error("An error occurred: " + error);
    }
  };

  return (
    <>
      <img className="signup-background-image" src={backgroundImage} alt="" />
      <div className="signup-card">
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
        <div className="signup-btns">
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
      </div>
      {password === confirmPassword && role ? (
        <div className="verification-confirm-card">
          <p>
            We've sent you a verification email. Please verify your email and
            press continue.
          </p>
          <button onClick={checkVerificationStatus}>Continue</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
