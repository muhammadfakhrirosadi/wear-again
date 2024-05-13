import React from 'react';
import { Link } from 'react-router-dom';
import Navbar_2 from '../components/Navbar_2';
import Footer from '../components/Footer';
import Image_Artikel1 from '../assets/Artikel_1.png';
import Image_Artikel2 from '../assets/Tabel_Negatif.png';
import Image_Fakta1 from '../assets/Artikel 1.jpg';
import Image_Fakta2 from '../assets/Artikel 2.jpg';
import Image_Fakta3 from '../assets/Artikel 3.jpg';
import Image_Fakta4 from '../assets/Artikel 4.png';
import Image_Fakta5 from '../assets/Artikel 5.png';
import '../styles/Artikel_Full1.css';

function Artikel_Full1() {
    return (
        <div>
            <Navbar_2 />
            <div className="content">
                <div className="article-text">
                <div>
                <h1>Solusi Alternatif Limbah Tekstil</h1>
                <img src={Image_Artikel1} alt="Artikel Image" />
                </div>
                    <h2>Tren Domestik Dan Global</h2>
                    <p>Balikpapan - Perkembangan Industri Tekstil Indonesia memasuki tahun 2018 mencatat pertumbuhan yang sangat positif. Pertumbuhan tercatat mengalami lonjakan ekspor sebesar 6 persen, yakni sekitar 11,8 miliar US$ pada tahun 2016 menjadi 12,4 milliar US$ pada tahun 2017.Neraca perdagangan Tekstil juga mengalami kenaikan yang sama, sebesar 1,7 persen, dari 3,67 milliar US$ pada tahun 2016 menjadi 3,73 milliar US$ pada tahun 2017.<br/><br/> 
                        Tren yang sama juga terjadi di ranah investasi Industri Tekstil. Sektor ini mengalami kenaikan yang cukup signifikan, hingga 68 persen, dibandingkan tahun yang hanya menyumbang 61,4 persen. Tren kenaikan ini terus berlanjut hingga semester pertama tahun 2018 dengan seiring dengan meningkatnya permintaan ekspor dan impor. Bahkan dari Januari hingga Juli 2018, nilai pengiriman produk tekstil Indonesia mencapai 7,74 milliar US$ dan diperkirakan akan terus meningkat hingga mencapai 13-14 milliar US$ pada tahun-tahun berikutnya.<br/><br/> 
                        Data World Bank 2017, menunjukkan bahwa perkembangan industri tekstil secara global mengalami kenaikan yang cukup signifikan, di mana Asia, khususnya China menduduki peringkat tertinggi dengan kenaikan 39 persen. China adalah produsen dan eksportir tekstil dan garmen terkemuka di dunia. Kenaikan perdagangan tekstil ini diikuti dengan kenaikan investasi di Industri tekstil dan garmen Indonesia yang tumbuh dari 149,88 trilliun pada 2010 menjadi 151,77 trilliun (16,54 milliar US$) pada tahun 2011. Investasi paling tinggi yakni datang dari produsen lokal serta dari masuknya investor asing ke pasar Indonesia. Jumlah perusahaan tekstil juga naik dari 2880 menjadi 2980, meningkat hingga 3,5 persen (Assosiasi Pertekstilan Indonesia). Perluasan sektor ini dan pertumbuhan investasi menandakan kepercayaan global terhadap Industri tekstil karena semakin banyak produsen tekstil yang datang untuk memilih Indonesia sebagai basis manufaktur dan sumber alternative bagi China. </p>
                    <h2>Dampak Negatif Terhadap Lingkungan</h2>
                    <p>Pada Proses pewarnaan tekstil kebanyakan menggunakan zat warna sintetik dibandingkan dengan zat warna alam, karena zat pewarna sintetik dapat memenuhi kebutuhan skala besar, warnanya lebih bervariasi dan pemakaiannya lebih praktis. Pewarna sintetik digunakan secara ekstensif pada industri tekstil lebih dari 700.000 ton dari sekitar 10.000 pewarna sintetik yang berbeda yang diproduksi secara global. Komponen limbah yang terkontaminasi oleh zat pewarna sintetik dapat menyebabkan kerusakan yang serius pada ekosistem dan kesehatan. Sebagai akibatnya, kadar DO (Dissolve Oxygen) dalam ekosistem perairan akan turun, yang berimbas pada peningkatan COD (Chemical Oxygen Demand). </p>
                    <img src={Image_Artikel2} alt="Gambar Artikel 2" />
                    <p><span className='Color_Tabel'>Tabel 2.</span> Polutan dan Kontaminan Limbah Industri Tekstil</p>
                    <p>Begitu berbahayanya dampak perkembangan industri tekstil ini, hingga telah memainkan peran utama dalam peningkatan masalah lingkungan. Dampak lingkungan utama dalam industri tekstil dimanifestsikan oleh pembuangan sejumlah besar muatan limbah kimia ke lingkungan. Elemen penting lainnya adalah penggunaan bahan kimia dan air yang tinggi, konsumsi energi, polusi udara, limbah padat dan pembentukan bau. Masalah lingkungan yang terkait dengan sektor tekstil dan garmen, dimulai dengan obat-obatan yang digunakan dalam budidaya serat alami dan emisi dalam produksi serat sintesis.</p>
                    <h2>Solusi Konvensional</h2>
                    <p>Perkembangan teknologi beberapa tahun terakhir, menunjukkan serangkaian proses sedang dilakukan untuk mengatasi dampak industri tekstil tersebut terhadap lingkungan. Beberapa upaya penanganan limbah tekstil secara konvensional seperti adsorpsi dan penggunaan lumpur (sewage sludge), dan karbon aktif telah banyak dilakukan, akan tetapi hasilnya kurang efektif karena adsorbat yang terakumulasi di dalam adsorben pada akhirnya malah akan menimbulkan persoalan baru. <br/><br/>
                        Selain itu juga diperlukan waktu yang cukup lama serta diketahui beberapa jenis limbah zat warna memiliki sifat yang resisten untuk didegradasi secara biologis.  Beberapa teknologi alternatif lain juga digunakan untuk mengolah limbah cair mengandung zat pewarna yang ada dalam limbah cair, misalnya dengan teknik koagulasi, flokulasi, adsorbsi dengan karbon aktif. Penghilangan warna dengan proses koagulasi, flokulasi, adsorbsi dengan karbon aktif sifatnya hanya memindahkan zat warna dari fase cair ke dalam fase padat, bukan menguraikan senyawa kompleks pembentukan warna. Partikel-partikel warna yang menggumpal bersama bahan perlu diproses lebih lanjut sehingga tidak menimbulkan pencemaran lanjutan atau limbah baru.</p>
                        <Link to="/artikel" className="Tombol_Kembali">Kembali</Link>
                </div>
                <div className="fakta-container">
                        <h2>Fakta Populer</h2>
                        <div className="fakta-box">
                            <img src={Image_Fakta1} alt="Fakta 1" />
                            <p>Penting, Ini 3 Bahaya Limbah Fashion </p>
                        </div>
                        <div className="fakta-box">
                            <img src={Image_Fakta2} alt="Fakta 2" />
                            <p>Tren Mode yang Menjadi Bumerang terhadap Lingkungan</p>
                        </div>
                        <div className="fakta-box">
                            <img src={Image_Fakta3} alt="Fakta 3" />
                            <p>Slow Fashion” Dapat Kurangi Limbah Industri Tekstil </p>
                        </div>
                        <div className="fakta-box">
                            <img src={Image_Fakta4} alt="Fakta 4" />
                            <p>Peran Konsumen dalam Mengubah Tren Mode </p>
                        </div>
                        <div className="fakta-box">
                            <img src={Image_Fakta5} alt="Fakta 5" />
                            <p>Apa Itu Fast Fashion dan Dampak Fast Fashion Bagi Lingkungan? </p>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default Artikel_Full1;
