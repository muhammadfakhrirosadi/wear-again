import React from 'react'
import { Link } from 'react-router-dom';
import Navbar_2 from '../components/Navbar_2';
import Footer from '../components/Footer';
import '../styles/Artikel.css';
import Image_Artikel1 from '../assets/Artikel.png';
import Image_Artikel2 from '../assets/Artikel 1.jpg';
import Image_Artikel3 from '../assets/Artikel 2.jpg';
import Image_Artikel4 from '../assets/Artikel 3.jpg';
import Image_Artikel5 from '../assets/Artikel 4.png';
import Image_Artikel6 from '../assets/Artikel 5.png';
import BackgroundImage_2 from'../assets/Partikel_2.png';

function Artikel() {
  return (
    <div>
      <Navbar_2/>
      <article id="popular-articles" style={{ BackgroundImage: `url(${BackgroundImage_2})` }}>
        <h1><span className="colored">Fakta</span> <span className='colored2'>Tersedia</span></h1>
        <div className="article-wrapper">
          <div className="article-container">
            <div className="article-item">
              <img src= {Image_Artikel1} alt="Image 1"/>
              <div className="article-content">
                <h3>Solusi Alternatif Limbah Tekstil</h3>
                <p>Perkembangan Industri Tekstil Indonesia memasuki tahun 2018 mencatat pertumbuhan yang sangat positif. Pertumbuhan tercatat mengalami lonjakan ekspor sebesar 6 persen, yakni sekitar 11,8 miliar US$ pada tahun 2016. <br /> <br /> </p>
                <Link to="/artikel_full1" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
            <div className="article-item">
              <img src={Image_Artikel2} alt="Image 2" />
              <div className="article-content">
                <h3>Penting, Ini 3 Bahaya Limbah Fashion</h3>
                <p>Pernahkah terbersit dalam pikiran kamu tentang dampak koleksi fashionyang kamu miliki? Barang fashion, terutama pakaian yang dikenakan saat ini melewati berbagai proses dan ternyata berbahaya untuk lingkungan.</p>
                <Link to="#" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
            <div className="article-item">
              <img src={Image_Artikel3} alt="Image 3" />
              <div className="article-content">
                <h3>Tren Mode yang Menjadi Bumerang terhadap Lingkungan</h3>
                <p>Persoalan limbah bukanlah hal baru di dunia. Faktanya, Ibu Pertiwi kita telah menghadapi dampak dari limbah ini berkali-kali tak terhingga. <br /> <br />  <br /> </p>
                <Link to="#" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
            <div className="article-item">
              <img src={Image_Artikel4} alt="Image 4" />
              <div className="article-content">
                <h3>Slow Fashion” Dapat Kurangi Limbah Industri Tekstil</h3>
                <p>Fashion menjadi penyumbang polusi ketiga terbesar di dunia. Slowfashion atau merupakan tawaran alternatif untuk mengurangi limabah tekstil. <br /> <br /></p>
                <Link to="#" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
            <div className="article-item">
              <img src={Image_Artikel5} alt="Image 5" />
              <div className="article-content">
                <h3>Peran Konsumen dalam Mengubah Tren Mode</h3>
                <p>Konsumen memiliki peran penting dalam mengubah tren mode menuju ke arah yang lebih baik lagi dengan memilih pakaian bekas yang berkualitas dapat mengurangi dampak negatif dari Tren Ini.</p>
                <Link to="#" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
            <div className="article-item">
              <img src={Image_Artikel6} alt="Image 6" />
              <div className="article-content">
                <h3>Apa Itu Fast Fashion dan Dampak Fast Fashion Bagi Lingkungan?</h3>
                <p>Dampak fast fashion berpengaruh negatif bagi kesehatan lingkungan. Dari mulai proses produksi, pemasaran, hingga distribusi, hal tersebut mencemari lingkungan.</p>
                <Link to="#" className="learn_more_btn">Lihat</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Artikel;