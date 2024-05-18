import React from "react";
import "../styles/Sign.css";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/Logo Primary.png";
import "../styles/Footer.css";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
const SignUp = () => {
  return (
    <login className="login">
      <div className="split left">
        <div className="centered">
          <img src={Logo} />
        </div>
      </div>

      <div className="split right">
        <div className="centered" style={{ width: "55%" }}>
          <div className="login">
            <h1 className="masuk">
              <span>Daftar</span>
            </h1>
            <form>
              <p style={{ color: "#356835" }}>Email</p>
              <div className="input">
                <MdEmail color="#356835" />
                <input
                  className="innerside"
                  type="text"
                  placeholder="Masukan alamat email anda"
                  required
                />
              </div>
              <div>
                <p style={{ color: "#356835" }}>Nama Pengguna</p>
                <div className="input">
                  <CiLock color="#356835" />
                  <input
                    className="innerside"
                    placeholder="Masukkan username anda"
                    type="password"
                    required
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
                <button className="google-login">
                  <FcGoogle />
                  Lanjutkan dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </login>
  );
};

export default SignUp;
