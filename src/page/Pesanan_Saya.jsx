import React from "react";
import "../styles/Pesanan_Saya.css";
import Jilbab from "../assets/etalase 7.png";
import Pashmina from "../assets/Etalase/etalase_2.png";
import Navbar_2 from "../components/Navbar_2";
import Footer_2 from "../assets/Footer Faktur Pemesanan.png";

function Pesanan_Saya() {
  return (
    <div className="pesanan_saya">
      <div>
        <Navbar_2 />
      </div>
      <main className="main">
        <h2>Pesanan Saya</h2>
        <div className="orders">
          <div className="order-card green">
            <div className="box-image">
              <img
                className="image-card"
                src={Pashmina}
                alt="Pashmina Silk Premium"
              />
            </div>
            <div className="order-details">
              <h3>Pashmina Silk Premium</h3>
              <p>Lafiye</p>
              <div className="text-box">
                <p>Barang bisa diambil maksimal pada:</p>
                <div className="pickup-date">
                  Jum'at, 10 Mei 2024 Pukul 18.00 WIB
                </div>
              </div>
            </div>
          </div>
          <div className="order-card red">
            <div className="box-image">
              <img
                className="image-card"
                src={Jilbab}
                alt="Jilbab Segiempat Rawis"
              />
            </div>
            <div className="order-details">
              <h3>Jilbab Segiempat Rawis</h3>
              <p>Saudia</p>
              <div className="text-box">
                <p>
                  Pesanan dibatalkan. Anda telah melewati batas maksimal
                  pengambilan pada:
                </p>
                <div className="pickup-date1">
                  Selasa, 7 Mei 2024 Pukul 18.00 WIB
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-2">
        <img src={Footer_2} alt="" />
      </footer>
    </div>
  );
}

export default Pesanan_Saya;
