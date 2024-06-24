import { query } from '../database/db.js';

export const getUserInfo = async (userId) => {
  return await query("SELECT username, email, phone, address FROM users WHERE id = ?", [userId]);
};

export const saveDonationDetails = async (donationDetails) => {
  const {
    id_user, id_barang, jenis_barang, nama_barang, gambar_barang,
    jumlah, kondisi, opsi_mobilisasi, waktu_donasi
  } = donationDetails;

  return await query(`
    INSERT INTO donations (id_user, id_barang, jenis_barang, nama_barang, gambar_barang, jumlah, kondisi, opsi_mobilisasi, waktu_donasi)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [id_user, id_barang, jenis_barang, nama_barang, gambar_barang, jumlah, kondisi, opsi_mobilisasi, waktu_donasi]);
};
