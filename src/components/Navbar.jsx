import React, { useState } from "react";
import Logo from "../assets/Logo Primary.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/artikel">Artikel</Link>
          <Link to="/etalase">Home</Link>
          <Link to="/sign">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/artikel">Artikel</Link>
        <Link to="/etalase">Etalase</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
