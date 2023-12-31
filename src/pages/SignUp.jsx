import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/signin.css";
import OAuth from "../components/Auth/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("Sign up was successfull");
      navigate("/sign-in");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="login-bg">
      <h1 className="title">Sign Up</h1>
      <div className="container">
        <div className="simage-container">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
          />
        </div>
        <div className="signin-container">
          <form className="signin-form" onSubmit={onSubmit}>
            <input
              type="name"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="email-form-input"
            />

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
                Already have an account?
                <Link to="/sign-in" className="register-text-link">
                  Sign-In
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button className="submit-btn" type="submit">
              Sign up
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
