import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Etalase.css';
import BackgroundImage from '../assets/Etalase/BG_ETALASE.png';
import Image_Etalase1 from '../assets/Etalase/etalase_1.png';
import Image_Etalase2 from '../assets/Etalase/etalase_2.png';
import Image_Etalase3 from '../assets/Etalase/etalase_3.png';
import Image_Etalase4 from '../assets/Etalase/etalase_4.png';
import Image_Etalase5 from '../assets/Etalase/etalase_5.png';
import Image_Etalase6 from '../assets/Etalase/etalase_6.png';
import Image_Etalase7 from '../assets/Etalase/etalase_7.png';
import Image_Etalase8 from '../assets/Etalase/etalase_8.png';
import Image_Koin from '../assets/Etalase/Koin.png';
import Navbar_2 from '../components/Navbar_2';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Etalase() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar_2 />
      <div className="etalase" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="header">
          <h1> Gaya baru tetap </h1>
          <h1>peduli lingkungan</h1>
          <h3> Fashionista, mari bijak berfashion dengan tetap peduli lingkungan. 
            Anda dapat mencoba gaya baru tanpa khawatir menumpuk pakaian lama. 
            Kumpulkan koin dengan berdonasi, dan ambil pakaian yang Anda inginkan!
          </h3>
          <p>#KenakanKembali</p>
          <Link to='/sign'>
            <button> Coba Sekarang </button>
          </Link>
        </div>
      </div>

      <div className='secondSectionEtalase'>
        <h1 className='text-center fw-bold'>Temukan gayamu!</h1>
        <div className="etalase-wrapper">
          <div className="boxContainerEtalase">
            <div className='grid-box'>
              <div className="box-etalase">
                <h3>Jaket Wanita</h3>
                <img src={Image_Etalase1} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />10 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Pasmina Silk P...</h3>
                <img src={Image_Etalase2} alt="" />
                <button onClick={openModal} className="detail_btn detail_btn_pasmina">Detail</button>
                <Link to="/wishlist" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="/pesanan" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />20 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Joger Pants</h3>
                <img src={Image_Etalase3} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />5 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Jaket Kulit Wanita</h3>
                <img src={Image_Etalase4} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />10 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Rok Plisket Pendek</h3>
                <img src={Image_Etalase5} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />7 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Jaket Denim</h3>
                <img src={Image_Etalase6} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />20 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Jilbab Segiempat</h3>
                <img src={Image_Etalase7} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />3 </span></Link>
              </div>
              <div className="box-etalase">
                <h3>Jaket Kulit</h3>
                <img src={Image_Etalase8} alt="" />
                <Link to="#" className="detail_btn">Detail</Link>
                <Link to="#" className="wishlist_btn">Tambah ke wishlist</Link>
                <Link to="#" className="koin_btn"> Beli dengan <span> <img src={Image_Koin} alt="Icon" />15 </span></Link>
              </div>
              <Link to="/wishlist" className="btn-w">Wishlist</Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pashmina Silk Premium Detail"
        className="modall"
        overlayClassName="overlayy"
      >
        <div className="modal-content8">
          <div className="modal-left">
            <img src={Image_Etalase2} alt="Pashmina Silk Premium" className="detail-image" />
            <div className="modal-buttons8">
              <div className="koin-container">
                <img src={Image_Koin} alt="Koin" className="koin-icon" />
                <span>20</span>
              </div>
              <Link to="/wishlist" className="wishlist-btn link-button">Tambah ke Wishlist</Link>
              <Link to="/pesanan" className="order-btn link-button">Pesan</Link>
            </div>
          </div>
          <div className="modal-right">
            <h2>Pashmina Silk Premium</h2>
            <h3>Ringkasan</h3>
            <p>Jenis barang: Pashmina</p>
            <p>Brand: Lafiye</p>
            <p>Warna: Biru</p>
            <p>Ukuran: 180x70 cm</p>
            <p>Bahan: Sutra</p>
            <p>Detail: Halus dan ringan</p>
            <p>Pemakaian: Minimal</p>
            <p>Kondisi: Baik, ada sedikit noda tinta</p>
            <h3>Deskripsi Lengkap</h3>
            <p>
              Pashmina Silk Premium dari Lafiye adalah pilihan sempurna untuk Anda yang mencari 
              kesempurnaan dalam berbusana. Terbuat dari bahan berkualitas tinggi, pashmina ini 
              memberikan rasa nyaman dan elegan saat digunakan. Terdapat sedikit noda tinta yang 
              hampir tidak terlihat, tetapi tidak mengurangi kualitas dan keindahan dari produk ini.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Etalase;
