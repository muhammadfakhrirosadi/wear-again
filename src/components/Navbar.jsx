import React, { useState } from "react";
import Logo from "../assets/Primary.png";
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
          <Link to="/">Beranda</Link>
          <Link to="/donasi">Donasi</Link>
          <Link to="/artikel">Artikel</Link>
          <Link to="/etalase">Etalase</Link>
          <Link to="/pesanan">Pesanan</Link>
          <Link to="/login">Masuk</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Beranda</Link>
        <Link to="/donasi">Donasi</Link>
        <Link to="/artikel">Artikel</Link>
        <Link to="/etalase">Etalase</Link>
        <Link to="/pesanan">Pesanan</Link>
        <Link to="/login">Masuk</Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
