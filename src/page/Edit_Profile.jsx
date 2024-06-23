import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../assets/Foto Profil.png";
import backButtonIcon3 from "../assets/Left Arrow.png";
import cameraIcon from "../assets/Camera.png";
import "../styles/EditProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const backendUrl = "http://localhost:3000";
const EditProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    no_wa: "",
    alamat: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/api/profile/edit`,
        profile
      );
      console.log("Profile updated:", response.data);
      navigate("/beranda");
    } catch (error) {
      console.error("Error updating profile:", error);
      // Optionally handle error state or show an error message to the user
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="top-bar">
        <Link to="/beranda" className="back-button3">
          <img src={backButtonIcon3} alt="Back" /> Kembali
        </Link>
      </div>
      <div className="content-container">
        <div className="left-section">
          <h1 className="edit-profile-title">
            <span className="edit-color">Edit </span>Profil
          </h1>
          <div className="profile-picture-container">
            <img src={userPhoto} alt="User" className="profile-picture" />
            <img src={cameraIcon} alt="Camera" className="camera-icon" />
          </div>
        </div>
        <div className="right-section">
          <form className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="form-label">
              Nama
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                value={profile.username}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email" className="form-label">
              Email
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={profile.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="no_wa" className="form-label">
              Nomor Whatsapp Aktif
              <input
                type="tel"
                id="no_wa"
                name="no_wa"
                className="form-input"
                value={profile.no_wa}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="alamat" className="form-label">
              Alamat Lengkap*
              <textarea
                id="alamat"
                name="alamat"
                className="form-input"
                value={profile.alamat}
                onChange={handleChange}
              />
            </label>
            <p className="address-note">
              *Alamat digunakan untuk penjemputan maupun pengiriman barang
            </p>
            <button type="submit" className="save-button">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
