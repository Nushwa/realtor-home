import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/signin.css";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section className="login-bg">
      <h1 className="title">Sign In</h1>
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

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="pass-form-input"
              />
              <div
                className="eye-icon cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            <div className="links-container">
              <p className="register-link">
                Don't have an account?
                <Link to="/sign-up" className="register-text-link">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button className="submit-btn" type="submit">
              Sign in
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            {/* <OAuth /> */}
          </form>
        </div>
      </div>
    </section>
  );
}
