import React from 'react';
import { Link } from 'react-router-dom';
import Navbar_2 from '../components/Navbar_2';
import Footer from '../components/Footer';
import BigImage from '../assets/Donasi Grub.png';
import '../styles/Donasi.css'; 

function Donasi() {
    return (
        <div>
            <Navbar_2 />
            <div className="donasi-container">
                <img src={BigImage} alt="Donasi Banner" className="donasi-banner" />
                <h1 className="prosedur-title">Prosedur Donasi</h1>
                <div className="donasi-content"> 
                    <div className="standar-layak-pakai-box">
                        <h3>Standar Layak Pakai :</h3>
                        <p> - Tidak kusam/berjamur<br />
                            - Kancing tidak copot<br />
                            - Tidak sobek/bolong<br />
                            - Bukan pakaian dalam<br />
                            - Bukan atribut perusahaan/lembaga/partai<br />
                            - Pakaian harus dalam keadaan bersih/sudah dicuci
                        </p>
                        <h3 className='Dimohon'>*Dimohon untuk tidak donasi pakaian yang sudah tidak layak pakai</h3>
                    </div>
                    <p className="right-align"> 
                    1. Mengisi Form Data Diri <br /><br />
                    2. Mengirim/Mengantar <br />Anda bisa mengirim atau mengantar donasi ke alamat kami (Harap cantumkan Nama dan nomor Whatsapp aktif anda di paket donasi) <br /><br />
                    3. Konfirmasi ke whatsapp kami jika sudah donasi sudah dikirim <br /> Format Konfirmasi Pengiriman <br /> Nama : <br /> Uesername Akun : <br /> Email Akun : <br /> Tanggal Pengiriman : (sertakan keterangan diantar/ojek online/ekspedisi) <br /> Nomor Resi/info lain : <br /><br /> 
                    4. Setelah paket sampai verifikasi barang dilakukan, koin akan masuk di Dompet Koin. Anda akan mendapat notifikasi melalui gmail. <br /><br />
                    5. Harap Isikan data dengan akurat.
                    </p>
                    <Link to="/form_donasi" className="donasi-button">Berdonasi</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Donasi;
