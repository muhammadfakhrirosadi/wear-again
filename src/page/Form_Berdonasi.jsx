import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../assets/Foto Profil.png';
import '../styles/FormDonasi.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Image_Konfirmasi from '../assets/Check Mark.png';
import Image_Help from '../assets/Help.png';
import Image_Arrow from '../assets/Left Arrow.png';
import Image_Koinn from '../assets/Etalase/Koin.png';

const Form_Berdonasi = () => {
  const [items, setItems] = useState([
    { id: 1, jenis: '', jumlah: '', kondisi: '', foto: null, isStarred: false }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobilisasiModalOpen, setIsMobilisasiModalOpen] = useState(false);
  const [mobilisasiOption, setMobilisasiOption] = useState('Antar Sendiri');
  const [mobilisasiTimeAntarSendiri, setMobilisasiTimeAntarSendiri] = useState('');
  const [mobilisasiTimeEkspedisi, setMobilisasiTimeEkspedisi] = useState('');
  const [mobilisasiTimePenjemputan, setMobilisasiTimePenjemputan] = useState('');
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false); // New state for confirmation modal

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, jenis: '', jumlah: '', kondisi: '', foto: null, isStarred: false }]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(newItems);
  };

  const handlePhotoChange = (id, file) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, foto: file };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleStarClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isStarred: !item.isStarred };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleMobilisasiOptionChange = (option) => {
    setMobilisasiOption(option);
    setIsMobilisasiModalOpen(false); // Close the modal when an option is selected
  };

  const handleMobilisasiTimeChange = (e, option) => {
    const time = e.target.value;
    switch (option) {
      case 'Antar Sendiri':
        setMobilisasiTimeAntarSendiri(time);
        break;
      case 'Via Ekspedisi':
        setMobilisasiTimeEkspedisi(time);
        break;
      case 'Penjemputan Lokal':
        setMobilisasiTimePenjemputan(time);
        break;
      default:
        break;
    }
  };

  const totalItems = items.reduce((total, item) => total + (item.jumlah ? parseInt(item.jumlah.split(' ')[0]) : 0), 0);

  return (
    <div>
      <div className="form-donasi-container">
        <Link to="/beranda" className="back-button"> <img src={Image_Arrow} alt="Back"></img>Kembali</Link>
        <h1 className="form-title">Form Donasi <span className="highlight">Wear Again</span></h1>
        <h2 className="section-title">Informasi Donatur</h2>
        <div className="donatur-info-wrapper">
          <div className="donatur-info">
            <img src={userPhoto} alt="Donatur" className="donatur-photo" />
            <div className="donatur-details">
              <h3>Nessie</h3>
              <p>nessie123@gmail.com</p>
              <p>+62 812 3456 7890</p>
              <p>Jl. Mawar No. 17, Bekasi</p>
            </div>
          </div>
        </div>
        <h2 className="section-title">
          Detail Item Donasi <span className="info-icon" onClick={() => setIsModalOpen(true)}>?</span>
        </h2>
        <div className="item-donasi">
          <div className="item-table-container">
            <table className="item-table">
              <thead>
                <tr>
                  <th>Jenis barang</th>
                  <th>Jumlah</th>
                  <th>Kondisi</th>
                  <th>Foto</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td className="jenis-barang">
                      <div className="icon-wrapper">
                        <input
                          type="text"
                          value={item.jenis}
                          onChange={(e) => handleChange(item.id, 'jenis', e.target.value)}
                        />
                        {item.isStarred ? (
                          <FaStar className="star-icon" onClick={() => handleStarClick(item.id)} />
                        ) : (
                          <FaRegStar className="star-icon" onClick={() => handleStarClick(item.id)} />
                        )}
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.jumlah}
                        onChange={(e) => handleChange(item.id, 'jumlah', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.kondisi}
                        onChange={(e) => handleChange(item.id, 'kondisi', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoChange(item.id, e.target.files[0])}
                      />
                      {item.foto && <img src={URL.createObjectURL(item.foto)} alt="Preview" className="photo-preview" />}
                    </td>
                    <td>
                      <button
                        className="remove-item-button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-item-button" onClick={handleAddItem}>+</button>
        </div>
        <div className="item-total">
          <span>Total</span>
          <span>{totalItems} item</span>
        </div>
        <h2 className="section-title">Mobilisasi Barang</h2>
        <div className="mobilisasi-barang">
          <table className="mobilisasi-table">
            <tbody>
              <tr>
                <td className="label">Opsi Mobilisasi</td>
                <td className="click-antar" onClick={() => setIsMobilisasiModalOpen(true)}>{mobilisasiOption}</td>
              </tr>
              <tr>
                <td className="label">Waktu</td>
                <td>
                  <input
                    type="datetime-local"
                    value={
                      mobilisasiOption === 'Antar Sendiri'
                        ? mobilisasiTimeAntarSendiri
                        : mobilisasiOption === 'Via Ekspedisi'
                        ? mobilisasiTimeEkspedisi
                        : mobilisasiOption === 'Penjemputan Lokal'
                        ? mobilisasiTimePenjemputan
                        : ''
                    }
                    onChange={(e) => handleMobilisasiTimeChange(e, mobilisasiOption)}
                    className="mobilisasi-time-input"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mobilisasi-note">Harap konfirmasi kepada tim kami apabila ada perubahan waktu pengantaran atau kendala lainnya</p>
        <button className="donasi-btn" onClick={() => setIsConfirmationModalOpen(true)}>Donasikan</button> {/* Show confirmation modal */}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setIsModalOpen(false)}>×</span>
            <h2> <img src= {Image_Help} alt="Panduan" className="modal-image" />Petunjuk pengisian form donasi</h2>
            <p><strong>Jenis barang</strong></p>
            <p>Tulis satu jenis barang yang ingin anda donasikan. Contoh: Baju, Celana, Jaket, Jilbab, Rok, dll. Jika ada salah satu item yang memiliki kondisi khusus, tulis dalam tabel terpisah. Klik star jika termasuk barang branded.</p>
            <p><strong>Jumlah</strong></p>
            <p>Jika anda memiliki beberapa jenis barang yang sama. Tuliskan dengan angka.</p>
            <p><strong>Kondisi</strong></p>
            <p>Jelaskan kondisi barang anda secara spesifik. Anda dapat mengisinya dengan menjelaskan kerusakan barang dan penyebabnya atau pernyataan “Tidak ada kerusakan” jika tidak ada kerusakan serius pada barang. Sertakan foto bagian yang cacat.</p>
            <p><strong>Contoh</strong></p>
            <p>Anda akan mendonasikan 3 baju dan 1 celana. Salah satu baju yang akan anda donasikan mengalami kerusakan ringan berupa sedikit noda cat di bagian lengan. Anda dapat mengisi form sebagai berikut:</p>
            <table className="example-table">
              <thead>
                <tr>
                  <th>Jenis Barang</th>
                  <th>Jumlah</th>
                  <th>Kondisi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baju</td>
                  <td>3 pcs</td>
                  <td>Tidak ada kerusakan</td>
                </tr>
                <tr>
                  <td>Baju</td>
                  <td>1 pcs</td>
                  <td>Ada cacat sedikit di salah satu bagian lengan berupa noda cat</td>
                </tr>
                <tr>
                  <td>Celana</td>
                  <td>1 pcs</td>
                  <td>Tidak ada kerusakan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isMobilisasiModalOpen && (
        <div className="modal-overlay" onClick={() => setIsMobilisasiModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setIsMobilisasiModalOpen(false)}>×</span>
            <h2 className="antar-barang">Mobilisasi Barang Donasi</h2>
            <div className="mobilisasi-option" onClick={() => handleMobilisasiOptionChange('Antar Sendiri')}>
              <div className="option-container">
                <h3>Antar Sendiri</h3>
                <p>Anda dapat menentukan waktu untuk mengantar barang ke tempat kami.</p>
              </div>
            </div>
            <div className="mobilisasi-option" onClick={() => handleMobilisasiOptionChange('Via Ekspedisi')}>
              <div className="option-container">
                <h3>Via Ekspedisi</h3>
                <p>Anda dapat melakukan pengiriman barang melalui ekspedisi yang anda kehendaki dan menginformasikan nomor resi melalui kontak kami. Anda akan menanggung biaya pengiriman.</p>
              </div>
            </div>
            <div className="mobilisasi-option" onClick={() => handleMobilisasiOptionChange('Penjemputan Lokal')}>
              <div className="option-container">
                <h3>Penjemputan Lokal</h3>
                <p>Penjemputan barang akan dilakukan oleh tim kami setiap hari Rabu dan Jum’at. Anda akan dikenakan biaya sebesar <img src={Image_Koinn}alt="Koin" /> 2 koin untuk memilih opsi penjemputan ini.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isConfirmationModalOpen && (
        <div className="modal-overlay" onClick={() => setIsConfirmationModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="confirmation-modal">
              <span className="close-button" onClick={() => setIsConfirmationModalOpen(false)}>×</span>
              <div className="confirmation-content">
                <div className="confirmation-icon">
                <img src={Image_Konfirmasi}alt="Konfirm"></img>
                </div>
                <h2>Form berhasil diisi!</h2>
                <p>Lakukan pengiriman item donasi dan klaim koin di halaman <Link to="/profil-koin" className="profile-link">Profil</Link></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form_Berdonasi;
