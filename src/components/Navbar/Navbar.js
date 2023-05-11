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
        <header>
          <Link to="/signup" className="signup">
            Sign up
          </Link>
          <div className="center-container">
            <Link to="/">
              <h1 className="sahkun">Sahkun</h1>
            </Link>

            <Link to="/ourmission" className="ourmission">
              Our mission
            </Link>
            <button onClick={handleClick} className="download">
              Download App
            </button>
          </div>
        </header>
        <hr className="line" />
      </nav>
    </>
  );
}

export default Navbar;
