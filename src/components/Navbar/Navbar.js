import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <header>
            {/* Add the hamburger icon */}
            <div className="hamburger" onClick={toggleMenu}>
              {!menuOpen ? (
                <>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </>
              ) : (
                <div className="x-icon">
                  <div className="x-bar1"></div>
                  <div className="x-bar2"></div>
                </div>
              )}
            </div>
            <Link to="/">
              <b className="sahkun">Sahkun</b>
            </Link>
            {/* Dropdown menu */}
            {menuOpen && (
              <div className="dropdown-menu">
                <Link to="/signup" className="signup">
                  Sign up
                </Link>
                <Link to="/ourmission" className="ourmission">
                  Our mission
                </Link>
                <button onClick={handleClick} className="download">
                  Download App
                </button>
              </div>
            )}
            <hr className="line" />
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
