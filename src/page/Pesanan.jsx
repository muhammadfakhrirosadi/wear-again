import React, { useState } from "react";
import axios from "axios";
import "../styles/Pesanan.css";
import Pashmina from "../assets/Etalase/etalase_2.png";
import { Link } from "react-router-dom";
import Image_Arrow from "../assets/Left Arrow.png";
import Image_Koin from "../assets/Etalase/Koin.png";
import Footer_2 from "../assets/Footer Faktur Pemesanan.png";
import SuccessIcon from "../assets/Check Mark.png";

function Pesanan() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [kodePromo, setKodePromo] = useState("");
  const [opsiPengiriman, setOpsiPengiriman] = useState("Ambil di Tempat");
  const [tanggal, setTanggal] = useState("");
  const [bulan, setBulan] = useState("Januari");
  const [tahun, setTahun] = useState("");
  const [totalHarga, setTotalHarga] = useState(20); // Harga contoh, sesuaikan dengan kebutuhan
  const [alamatPengiriman, setAlamatPengiriman] = useState("Jl. Anggrek 123, Bekasi"); // Contoh alamat default
  const [waktuMaksimal, setWaktuMaksimal] = useState(""); // State untuk waktu maksimal

  const handleOrder = async () => {
    // Konversi tanggal, bulan, tahun menjadi format yang sesuai
    const waktuPengambilan = `${tahun}-${("0" + bulan).slice(-2)}-${("0" + tanggal).slice(-2)}`;
  
    const orderData = {
      id_barang: 1,
      nama_barang: "Pashmina Silk Premium",
      gambar_barang: "path/to/image",
      brand: "Lafiye",
      kondisi: "Baik, ada sedikit noda tinta",
      kode_promo: kodePromo,
      opsi_pengiriman: opsiPengiriman,
      waktu_pengambilan: waktuPengambilan,
      total_harga: totalHarga
    };
  
    try {
      const token = localStorage.getItem("token"); // Pastikan Anda sudah login dan token disimpan di localStorage
      const response = await axios.post("http://localhost:3000/api/orders/create", orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setIsConfirmationModalOpen(true);
      }
    } catch (error) {
      console.error("Error creating order", error);
    }
  };
  
  // Fungsi untuk mengupdate waktu maksimal berdasarkan input tanggal, bulan, dan tahun
  const updateWaktuMaksimal = () => {
    if (tanggal && bulan && tahun) {
      // Konversi bulan menjadi format dua digit
      const formattedBulan = ("0" + bulan).slice(-2);
      const date = new Date(`${tahun}-${formattedBulan}-${tanggal}`);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      setWaktuMaksimal(formattedDate);
    } else {
      setWaktuMaksimal(""); // Reset waktu maksimal jika input tidak lengkap
    }
  };
  
  // Handle perubahan input tanggal
  const handleTanggalChange = (e) => {
    const value = e.target.value;
    setTanggal(value);
    updateWaktuMaksimal();
  };
  
  // Handle perubahan input bulan
  const handleBulanChange = (e) => {
    const value = e.target.value;
    setBulan(value);
    updateWaktuMaksimal();
  };
  
  // Handle perubahan input tahun
  const handleTahunChange = (e) => {
    const value = e.target.value;
    setTahun(value);
    updateWaktuMaksimal();
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
              <input type="text" value={kodePromo} onChange={(e) => setKodePromo(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Opsi Pengiriman</label>
              <select value={opsiPengiriman} onChange={(e) => setOpsiPengiriman(e.target.value)}>
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
                  value={tanggal}
                  onChange={handleTanggalChange}
                />
                <select style={{ flex: "2" }} value={bulan} onChange={handleBulanChange}>
                  <option value="01">Januari</option>
                  <option value="02">Februari</option>
                  <option value="03">Maret</option>
                  <option value="04">April</option>
                  <option value="05">Mei</option>
                  <option value="06">Juni</option>
                  <option value="07">Juli</option>
                  <option value="08">Agustus</option>
                  <option value="09">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
                <input
                  type="number"
                  placeholder="Tahun"
                  style={{ flex: "1" }}
                  value={tahun}
                  onChange={handleTahunChange}
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
                Anda dapat melakukan pengambilan item maksimal {waktuMaksimal ? waktuMaksimal : "Jum'at, 10 Mei 2024"} di alamat berikut:
              </p>
              <p>Alamat standpoint kami :</p>
              <p>{alamatPengiriman}</p>
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
