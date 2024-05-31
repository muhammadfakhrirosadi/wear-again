import React from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../assets/Foto Profil.png';
import backButtonIcon from '../assets/Left Arrow.png';
import koinIcon from '../assets/Etalase/Koin.png';
import verificationIcon from '../assets/Refresh.png';
import checkIcon from '../assets/Centang.png';
import shirtIcon from '../assets/Clothes.png';
import shirtIcon2 from '../assets/Clothes2.png';
import nextProfilIcon from '../assets/Pensil.png';
import '../styles/Profilkoin.css';

const ProfilKoin = () => {
  return (
    <div className="profil-koin-container">
      <Link to="/" className="back-button2">
        <img src={backButtonIcon} alt="Back" /> Kembali
      </Link>
      <h1 className="profil-saya"> <span className='profil-color'> Profil</span> Saya</h1>

      <div className="profil-container">
        <div className="profil-donatur-wrapper">
          <div className="profil-donatur-info">
            <img src={userPhoto} alt="Donatur" className="profil-donatur-photo" />
            <div className="profil-donatur-details">
              <div className="profil-donatur-header">
                <h3>Nessie</h3>
                <Link to="/edit_profile">
                  <img src={nextProfilIcon} alt="Next Page" className="next-page-icon" />
                </Link>
              </div>
              <p>nessie123@gmail.com</p>
              <p>+62 812 3456 7890</p>
              <p>Jl. Mawar No. 17, Bekasi</p>
            </div>
          </div>
        </div>

        <div className="koin-card">
          <h2>Dompet Koin</h2>
          <div className="koin-info">
            <p>Anda memiliki</p>
            <div className="koin-amount">
              <img src={koinIcon} alt="Koin" /> 100
            </div>
            <Link to="/halaman-tambahan-koin" className="add-koin-button">
              Dapatkan koin tambahan
            </Link>
          </div>
        </div>
      </div>

      <h2 className="riwayat-donasi">Riwayat Donasi</h2>

      <div className="riwayat-container">
        <div className="riwayat-card riwayat-card-left">
          <div className="riwayat-header">
            <span className="tanggal">Rabu, 8 Mei 2024</span>
            <div className="status">
              Proses Verifikasi <img src={verificationIcon} alt="Proses Verifikasi" />
            </div>
          </div>
          <div className="riwayat-content">
            <div className="icon">
              <img src={shirtIcon} alt="Jenis Barang" />
              <span className="jumlah">25</span>
            </div>
            <div className="status-info">dalam proses pengecekan</div>
            <div className="koin">
              <img src={koinIcon} alt="Koin" />
              <div className="status-info">100 akan didapatkan</div>
            </div>
          </div>
        </div>

        <div className="riwayat-card riwayat-card-right">
          <div className="riwayat-header">
            <span className="tanggal">Senin, 6 Mei 2024</span>
            <div className="status">
              Selesai <img src={checkIcon} alt="Selesai" />
            </div>
          </div>
          <div className="riwayat-content">
            <div className="icon2">
              <img src={shirtIcon2} alt="Jenis Barang" />
              <span className="jumlah">25</span>
              <div className="status-info">Terkonfirmasi Layak Pakai</div>
            </div>
            <div className="koin">
              <img src={koinIcon} alt="Koin" /> 100
            </div>
            <div className="status-info">Berhasil diklaim</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilKoin;
