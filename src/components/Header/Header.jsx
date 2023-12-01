import React, { useEffect, useState } from "react";
import logo from "../../assets/images/headerLogo.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  const pathMatchRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <div className="logo-container">
          <img src={logo} alt="realtor-logo" className="logo" />
          <span className="logo-text">Realtor Home</span>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/offers" className="nav-link">
              Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={`nav-link ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
              }`}
            >
              {pageState}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
