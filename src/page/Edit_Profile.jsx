import React from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../assets/Foto Profil.png';
import backButtonIcon3 from '../assets/Left Arrow.png'; 
import cameraIcon from '../assets/Camera.png';
import '../styles/EditProfile.css';

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="top-bar">
        <Link to="/beranda" className="back-button3">
          <img src={backButtonIcon3} alt="Back" /> Kembali
        </Link>
      </div>
      <div className="content-container">
        <div className="left-section">
          <h1 className="edit-profile-title"><span className='edit-color'>Edit </span>Profil</h1>
          <div className="profile-picture-container">
            <img src={userPhoto} alt="User" className="profile-picture" />
            <img src={cameraIcon} alt="Camera" className="camera-icon" />
          </div>
        </div>
        <div className="right-section">
          <form className="edit-profile-form">
            <label className="form-label">
              Nama
              <input type="text" name="name" className="form-input" />
            </label>
            <label className="form-label">
              Email
              <input type="email" name="email" className="form-input" />
            </label>
            <label className="form-label">
              Nomor Whatsapp Aktif
              <input type="tel" name="whatsapp" className="form-input" />
            </label>
            <label className="form-label">
              Alamat Lengkap*
              <textarea name="address" className="form-input" />
            </label>
            <p className="address-note">
              *Alamat digunakan untuk penjemputan maupun pengiriman barang
            </p>
            <button type="submit" className="save-button">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
