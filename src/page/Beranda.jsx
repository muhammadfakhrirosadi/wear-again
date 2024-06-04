import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Beranda.css';
import BackgroundImageBeranda from '../assets/Hero.png';
import BoxImage2_1 from '../assets/Place_Marker.png';
import BoxImage2_2 from '../assets/Holding_Box.png';
import BoxImage2_3 from '../assets/People.png';
import BoxImage2_4 from '../assets/Task_Completed.png';
import Image1_1 from '../assets/Creativity.png';
import Image1_2 from '../assets/Trust.png';
import BackgroundImage_2 from'../assets/Partikel_2.png';
import Navbar2 from '../components/Navbar_2';
import Footer2 from '../components/Footer';

function Beranda() {
  return (
    <div>
      <div>
        <Navbar2/>
      </div>
      <div className="beranda" style={{ backgroundImage: `url(${BackgroundImageBeranda})` }}>
        <div className="headerContainerBeranda">
          <h1> Wear Again </h1>
          <h3> Solusi atasi pakaian bekas yang masih layak pakai
            agar bisa berguna untuk orang lain</h3>
          <p>#KenakanKembali</p>
          <Link to='/donasi'>
            <button> Yuk Berdonasi! </button>
          </Link>
        </div>
      </div>
      <div className="secondSectionBeranda" style={{ BackgroundImage: `url(${BackgroundImage_2})` }}>
      <h2><span>Tentang</span> <span className="highlight2">Wear Again</span></h2>
        <p>Kami Wear Again berkomitmen untuk mengurangi limbah pakaian dengan menyalurkan pakaian bekas layak pakai kepada mereka yang membutuhkan.  
          Kami adalah suara bagi keadilan sosial dan keberlanjutan lingkungan. 
          Dengan dukungan Anda, kami terus bergerak maju untuk menciptakan perubahan 
          positif melalui setiap donasi pakaian bekas yang diterima.</p>
        <div className="boxContainerBeranda">
          <div className="box">
            <img src={BoxImage2_1} alt="Box 1" />
            <h3>Lokasi Wear Again</h3>
            <p>Kita berada di kota bekasi.</p>
          </div>
          <div className="box">
            <img src={BoxImage2_2} alt="Box 2" />
            <h3>Menampung</h3>
            <p>Kami siap menampung pakaian layak pakai Anda dari berbagai kalangan.</p>
          </div>
          <div className="box">
            <img src={BoxImage2_3} alt="Box 3" />
            <h3>Penerima</h3>
            <p>Kami mendonasikan pakaian kepada panti asuhan dan yang membutuhkannya.</p>
          </div>
          <div className="box">
            <img src={BoxImage2_4} alt="Box 4" />
            <h3>Aman</h3>
            <p>Seperti tujuan awal kami, pakaian yang masih layak pakai akan disumbangkan dan itu pasti.</p>
          </div>
        </div>
      </div>
      <div className="additionalSectionBeranda">
        <h2>Manfaat Program</h2>
        <div className="additionalContentBeranda">
          <div className="additionalItemBeranda">
            <img src={Image1_1} alt="Image 2" />
            <p>Menjadi wadah tempat penampungan pakaian yang masih layak pakai
              untuk mngurangi limbah pakaian</p>
          </div>
          <div className="additionalItemBeranda">
            <img src={Image1_2} alt="Image 1" />
            <p>program kami meningkatkan kesadaran masyarakat tentang pentingnya 
              mendaur ulang pakaian dan dampak positifnya bagi lingkungan.</p>
          </div>
        </div>
      </div>
      <div>
        <Footer2/>
      </div>
    </div>
    
  );
}

export default Beranda;
