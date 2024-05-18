import React, { useState } from 'react';
import Logo from '../assets/Primary.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import MyProfileImage from '../assets/SIGN LOGO.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Navbar_2.css';

function Navbar_2() {
    const [openLinks, setOpenLinks] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const toggleProfile = () => {
        setOpenProfile(!openProfile);
    };

    return (
        <div className='navbar1'>
            <div className='leftSide' id={openLinks ? 'open' : "close"}>
                <img src={Logo} alt="Logo"/>
                <div className='hiddenLinks'>
                    <Link to='/'>Beranda</Link>
                    <Link to='/donasi'>Donasi</Link>
                    <Link to='/artikel'>Artikel</Link>
                    <Link to='/etalase'>Etalase</Link>
                    <Link to='/pesanan'>Pesanan</Link>
                    <div className="profile" onClick={toggleProfile}>
                        <AccountCircleIcon />
                        {openProfile && (
                            <div className="profile-options">
                                <Link to='/myprofile'><AccountCircleIcon />My Profile</Link>
                                <Link to='/logout'><LogoutIcon/>Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'>Beranda</Link>
                <Link to='/donasi'>Donasi</Link>
                <Link to='/artikel'>Artikel</Link>
                <Link to='/etalase'>Etalase</Link>
                <Link to='/pesanan'>Pesanan</Link>
                <button className="menu-icon" onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
                <div className="profile" onClick={toggleProfile}>
                <img src={MyProfileImage} alt="My Profile" />
                    {openProfile && (
                        <div className="profile-options">
                            <Link to='/myprofile'><AccountCircleIcon className="profile-icon"/>My Profile</Link>
                            <Link to='/logout'><LogoutIcon className="profile-icon"/>Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar_2;
