import React from "react";
import "../styles/Pesanan.css";
import Pashmina from "../assets/etalase 7.png";

function Pesanan() {
  return (
    <div className="container">
      <div>
        <p>kembali</p>
      </div>
      <div className="header">
        {/* <img
          src="/path-to-back-icon.png"
          alt="Kembali"
          onClick={() => window.history.back()}
        /> */}
        <h2>Faktur Pemesanan</h2>
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
              <input type="number" placeholder="Tahun" style={{ flex: "1" }} />
            </div>
          </div>

          <div className="total">
            <span>Total</span>
            <span>20</span>
          </div>
        </div>

        <div className="address-details">
          <p>
            Anda dapat melakukan pengambilan item maksimal Jum'at, 10 Mei 2024
            di alamat berikut:
          </p>
          <p>Jl. Anggrek 123, Bekasi</p>
        </div>

        <div className="button-container">
          <button>Pesan</button>
        </div>
      </div>
    </div>
  );
}

export default Pesanan;
