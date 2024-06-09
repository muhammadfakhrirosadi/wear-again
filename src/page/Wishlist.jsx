import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';
import BackgroundImage from '../assets/Wishlist/BG Wishlist.png';
import Image_Wishlist1 from '../assets/Wishlist/Wishlist_1.png';
import Image_Wishlist2 from '../assets/Wishlist/Wishlist_2.png';
import Image_Wishlist3 from '../assets/Wishlist/Wishlist_3.png';
import Image_Wishlist4 from '../assets/Wishlist/Wishlist_4.png';
import Image_Koin from '../assets/Wishlist/Koin.png';
import Navbar_2 from '../components/Navbar_2';


function Wishlist() {
  return (
    <div>
      <div>
        <Navbar_2/>
      </div>
      <div className="wishlist" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="header-wishlist">
          <h1><span className="colored-1">Wishlist</span> <span className='colored-2'>Saya</span> </h1>
          <div className='secondSectionWishlist'>
          <div className='wishlist-wrapper'>
          <div className='boxContainerWishlist'>
          <div className='grid-box-w'>
            <div className='box-wishlist'>
              <img src={Image_Wishlist1} alt="" />
              <h2>Pashmina Silk Premium</h2>
              <h3>Brand : Lafiye </h3>
              <h3>Kondisi : Baik, ada sedikit noda tinta</h3>
              <Link to="/pesanan" className="W_btn">Pesan</Link>
              <Link to="#" className="P_btn"><span> <img src={Image_Koin}alt="Icon" /> 20 </span></Link>
          </div>
          <div className='box-wishlist'>
              <img src={Image_Wishlist2} alt="" />
              <h2>Jaket Denim</h2>
              <h3>Brand : No Brand </h3>
              <h3>Kondisi : Warna Pudar</h3>
              <Link to="#" className="W_btn">Pesan</Link>
              <Link to="#" className="P_btn"><span> <img src={Image_Koin}alt="Icon" /> 15 </span></Link>
          </div>
          <div className='box-wishlist1'>
              <img src={Image_Wishlist3} alt="" />
              <h2>Rok Plisket Pendek</h2>
              <h3>Brand : No Brand </h3>
              <h3>Kondisi : Baik, tanpa cacat</h3>
              <Link to="#" className="W_btn">Pesan</Link>
              <Link to="#" className="P_btn"><span> <img src={Image_Koin}alt="Icon" /> 7 </span></Link>
          </div>
          <div className='box-wishlist1'>
              <img src={Image_Wishlist4} alt="" />
              <h2>Jaket Kulit</h2>
              <h3>Brand : No Brand </h3>
              <h3>Kondisi : Baik, tanpa cacat</h3>
              <Link to="#" className="W_btn">Pesan</Link>
              <Link to="#" className="P_btn"><span> <img src={Image_Koin}alt="Icon" /> 15 </span></Link>
          </div>
          
   

          </div>
          </div>
          </div>

          </div>
          
        </div>
      </div>
      <div>
      
      </div>
     
      </div>
      
    );
}

export default Wishlist