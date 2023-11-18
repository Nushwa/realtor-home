import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../assets/styles/signin.css";
import OAuth from "../components/Auth/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="login-bg">
      <h1 className="title">Forgot Password</h1>
      <div className="container">
        <div className="simage-container">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
          />
        </div>
        <div className="signin-container">
          <form className="signin-form">
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="email-form-input"
            />

            <div className="links-container">
              <p className="register-link">
                Don't have an account?
                <Link to="/sign-up" className="register-text-link">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/sign-in" className="forgot-password-link">
                  Sign In instead
                </Link>
              </p>
            </div>

            <button className="submit-btn" type="submit">
              Send Reset Email
            </button>
            <div className="or-text">
              <p className="p-or ">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
