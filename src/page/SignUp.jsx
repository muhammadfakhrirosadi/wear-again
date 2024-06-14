import React, { useState } from "react";
import "../styles/Sign.css";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/Logo Primary.png";
import "../styles/Footer.css";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Registration successful");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="login">
      <div className="split left">
        <div className="centered">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="split right">
        <div className="centered" style={{ width: "55%" }}>
          <div className="login">
            <h1 className="masuk">
              <span>Daftar</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <p style={{ color: "#356835" }}>Email</p>
              <div className="input">
                <MdEmail color="#356835" />
                <input
                  className="innerside"
                  type="text"
                  placeholder="Masukan alamat email anda"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <p style={{ color: "#356835" }}>Nama Pengguna</p>
                <div className="input">
                  <CiLock color="#356835" />
                  <input
                    className="innerside"
                    placeholder="Masukkan username anda"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <p style={{ color: "#356835" }}>Kata Sandi</p>
                <div className="input">
                  <CiLock color="#356835" />
                  <input
                    className="innerside"
                    placeholder="Masukkan kata sandi anda"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <p style={{ color: "#356835" }}>Konfirmasi Sandi</p>
                <div className="input">
                  <CiLock color="#356835" />
                  <input
                    className="innerside"
                    placeholder="Masukkan kata sandi anda"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div>
                <button className="button-login" type="submit">
                  Buat Akun
                </button>
              </div>
              <p style={{ textAlign: "center" }}>
                Sudah punya akun? <a href="/login">Masuk</a>
              </p>
              <p style={{ textAlign: "center" }}>ATAU</p>
              <div className="container-google">
                <button className="google-login" onClick={handleGoogleLogin}>
                  <FcGoogle />
                  Lanjutkan dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
