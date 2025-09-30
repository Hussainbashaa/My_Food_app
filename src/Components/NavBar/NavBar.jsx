import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ searchTerm, setSearchTerm }) => {
  const SearchFood = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="main-div">
      <div className="NavBar">
        <div className="Logo">
          <img src="Hoomie.gif" alt="Hoomie" className="Hoomie" />
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search..."
            className="search"
            value={searchTerm}
            onChange={SearchFood}
          />
        </div>

        <div className="Options">
          <Link to="/Home" className="btn">
            Home
          </Link>
          <Link to="/Categories" className="btn">
            Category
          </Link>
          <Link to="/About" className="btn">
            About
          </Link>
          <Link to="/SignIn" className="btn">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
