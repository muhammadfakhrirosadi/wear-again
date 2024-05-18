import React from 'react';
import instagramLogo from '../assets/Instagram.png';
import "../styles/Footer.css";
import donateImage from '../assets/Orang Footer.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Hubungi Kami</h3>
                <p>Telepon : 08123456789</p>
                <p>Email : cswearagain@gmail.com</p>
                <img src={donateImage} alt="Donate" className="donate-image" />
            </div>
            <div className="follow">
                <h3>Ikuti Kami</h3>
                <div className="social-media">
                    <a href="#"><img src={instagramLogo} alt="Instagram" /></a>
                    <p>@wear.again</p>
                </div>
            </div>
            <div className="feedback">
                <h3>Kritik dan Saran</h3>
                <form>
                    <p>Nama</p>
                    <input type="text" placeholder="Masukan nama lengkap" required />
                    <p>Email</p>
                    <input type="email" placeholder="Masukan alamat email" required />
                    <p>Kritik dan saran</p>
                    <textarea placeholder="Masukan kritik dan saran" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
