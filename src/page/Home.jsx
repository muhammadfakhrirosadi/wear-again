import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BackgroundImage from '../assets/Hero.png';
import BoxImage1 from '../assets/Place_Marker.png';
import BoxImage2 from '../assets/Holding_Box.png';
import BoxImage3 from '../assets/People.png';
import BoxImage4 from '../assets/Task_Completed.png';
import Image1 from '../assets/Creativity.png';
import Image2 from '../assets/Trust.png';
import BackgroundImage_2 from'../assets/Partikel_2.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="headerContainer">
          <h1> Wear Again </h1>
          <h3> Solusi atasi pakaian bekas yang masih layak pakai
            untuk bisa berguna untuk orang lain</h3>
          <p>#KenakanKembali</p>
          <Link to='/sign'>
            <button> Yuk Berdonasi! </button>
          </Link>
        </div>
      </div>
      <div className="secondSection" style={{ BackgroundImage: `url(${BackgroundImage_2})` }}>
      <h2><span>Tentang</span> <span className="highlight">Wear Again</span></h2>
        <p>Kami Wear Again berkomitmen untuk mengurangi limbah pakaian dengan menyalurkan pakaian bekas layak pakai kepada mereka yang membutuhkan.  
          Kami adalah suara bagi keadilan sosial dan keberlanjutan lingkungan. 
          Dengan dukungan Anda, kami terus bergerak maju untuk menciptakan perubahan 
          positif melalui setiap donasi pakaian bekas yang diterima.</p>
        <div className="boxContainer">
          <div className="box">
            <img src={BoxImage1} alt="Box 1" />
            <h3>Lokasi Wear Again</h3>
            <p>Kita berada di kota bekasi.</p>
          </div>
          <div className="box">
            <img src={BoxImage2} alt="Box 2" />
            <h3>Menampung</h3>
            <p>Kami siap menampung pakaian layak pakai Anda dari berbagai kalangan.</p>
          </div>
          <div className="box">
            <img src={BoxImage3} alt="Box 3" />
            <h3>Penerima</h3>
            <p>Kami mendonasikan pakaian kepada panti asuhan dan yang membutuhkannya.</p>
          </div>
          <div className="box">
            <img src={BoxImage4} alt="Box 4" />
            <h3>Aman</h3>
            <p>Seperti tujuan awal kami, pakaian yang masih layak pakai akan disumbangkan dan itu pasti.</p>
          </div>
        </div>
      </div>
      <div className="additionalSection">
        <h2>Manfaat Program</h2>
        <div className="additionalContent">
          <div className="additionalItem">
            <img src={Image2} alt="Image 2" />
            <p>Menjadi wadah tempat penampungan pakaian yang masih layak pakai
              untuk mngurangi limbah pakaian</p>
          </div>
          <div className="additionalItem">
            <img src={Image1} alt="Image 1" />
            <p>program kami meningkatkan kesadaran masyarakat tentang pentingnya 
              mendaur ulang pakaian dan dampak positifnya bagi lingkungan.</p>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default Home;
