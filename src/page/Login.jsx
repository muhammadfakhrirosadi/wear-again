import React, { useState } from "react";
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/Logo Primary.png";
import "../styles/Footer.css";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Simpan token di localStorage
      navigate("/beranda");
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
            <h1 className="welcome">
              <span>Welcome back !</span>
            </h1>
            <h1 className="masuk">
              <span>Masuk</span>
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
              <br />
              <div>
                <a href="#" style={{ display: "block", textAlign: "right" }}>
                  Lupa kata sandi?
                </a>
              </div>
              <br />
              <div>
                <button className="button-login" type="submit">
                  Login
                </button>
              </div>
              <p style={{ textAlign: "center" }}>
                Belum punya akun? <a href="/signup">Daftar gratis</a>
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

export default Login;
