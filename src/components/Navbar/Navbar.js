import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <header>
            <Link to="/signup" className="signup">
              Sign up
            </Link>
            <Link to="/">
              <b className="sahkun">Sahkun</b>
            </Link>
            <Link to="/ourmission" className="ourmission">
              Our mission
            </Link>
            <button onClick={handleClick} className="download">
              Download App
            </button>
            <hr className="line" />
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
