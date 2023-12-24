import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown, close it
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <h1> Anne's Bakery </h1>
      </div>
      <div className="rightSide">
        <NavLink to="/" activeclassname="active" className="desktopAnchor">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/menu" activeclassname="active" className="desktopAnchor">
          {" "}
          Menu{" "}
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="desktopAnchor">
          {" "}
          About{" "}
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="active"
          className="desktopAnchor"
        >
          {" "}
          Contact
        </NavLink>

        <button onClick={toggleDropdown}>
          <ReorderIcon />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown" ref={dropdownRef}>
            <NavLink
              to="/"
              activeclassname="active"
              className="dropdownAnchor"
              onClick={closeDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              activeclassname="active"
              className="dropdownAnchor"
              onClick={closeDropdown}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              activeclassname="active"
              className="dropdownAnchor"
              onClick={closeDropdown}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              activeclassname="active"
              className="dropdownAnchor"
              onClick={closeDropdown}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
