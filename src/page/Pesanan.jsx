import React, { useState } from "react";
import "../styles/Pesanan.css";
import Pashmina from "../assets/Etalase/etalase_2.png";
import { Link } from "react-router-dom";
import Image_Arrow from "../assets/Left Arrow.png";
import Image_Koin from "../assets/Etalase/Koin.png";
import Footer_2 from "../assets/Footer Faktur Pemesanan.png";
import SuccessIcon from "../assets/Check Mark.png";

function Pesanan() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleOrder = () => {
    setIsConfirmationModalOpen(true);
  };

  return (
    <div className="container">
      <div className="child-container">
        <Link to="/wishlist" className="back-button5">
          <img src={Image_Arrow} alt="Back"></img>Kembali
        </Link>
        <h2 className="judul">
          <span style={{ color: "#2B532A" }}>Faktur</span>{" "}
          <span style={{ color: "#478B46" }}>Pemesanan</span>
        </h2>
        <div className="header-1">
          <br></br>
        </div>

        <div className="order-summary">
          <h3>Pashmina Silk Premium</h3>
          <p>Brand: Lafiye</p>
          <p>Kondisi: Baik, ada sedikit noda tinta</p>
          <img
            src={Pashmina}
            alt="Pashmina Silk Premium"
            style={{ width: "20%" }}
          />

          <div className="order-details">
            <div className="form-group">
              <label>Kode Promo</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Opsi Pengiriman</label>
              <select>
                <option>Ambil di Tempat</option>
                <option>Pengiriman ke Alamat</option>
              </select>
            </div>

            <div className="form-group">
              <label>Waktu Pengambilan</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="number"
                  placeholder="Tanggal"
                  style={{ flex: "1" }}
                />
                <select style={{ flex: "2" }}>
                  <option>Januari</option>
                  <option>Februari</option>
                  <option>Maret</option>
                  <option>April</option>
                  <option>Mei</option>
                  <option>Juni</option>
                  <option>Juli</option>
                  <option>Agustus</option>
                  <option>September</option>
                  <option>Oktober</option>
                  <option>November</option>
                  <option>Desember</option>
                </select>
                <input
                  type="number"
                  placeholder="Tahun"
                  style={{ flex: "1" }}
                />
              </div>
            </div>

            <div className="total">
              <span>Total</span>
              <span>
                {" "}
                <img src={Image_Koin} alt="Icon" />
                20{" "}
              </span>
            </div>
          </div>

          <div className="address-details">
            <p>Detail Alamat</p>
            <div className="address-container">
              <p>
                Anda dapat melakukan pengambilan item maksimal Jum'at, 10 Mei
                2024 di alamat berikut:
              </p>
              <p>Alamat standpoint kami :</p>
              <p>Jl. Anggrek 123, Bekasi</p>
            </div>
          </div>

          <div className="button-container">
            <button onClick={handleOrder}>Pesan</button>
          </div>
        </div>
      </div>

      {isConfirmationModalOpen && (
        <div className="modal-header">
          <div className="modal-konten">
            <img src={SuccessIcon} alt="Success" className="berhasil-icon" />
            <h2>Item berhasil dipesan!</h2>
            <p>Lakukan pengecekan berkala di halaman <Link to="/pesanan_saya">Pesanan Saya</Link></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pesanan;
