import { query } from '../database/db.js';

export const createOrderInDB = async (orderDetails) => {
  const {
    id_user,
    id_barang,
    nama_barang,
    gambar_barang,
    brand,
    kondisi,
    kode_promo,
    opsi_pengiriman,
    waktu_pengambilan,
    total_harga
  } = orderDetails;

  const sql = `
    INSERT INTO akun.form_pesanan (
      id_user,
      id_barang,
      nama_barang,
      gambar_barang,
      brand,
      kondisi,
      kode_promo,
      opsi_pengiriman,
      waktu_pengambilan,
      total_harga
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    id_user,
    id_barang,
    nama_barang,
    gambar_barang,
    brand,
    kondisi,
    kode_promo,
    opsi_pengiriman,
    waktu_pengambilan,
    total_harga
  ];

  try {
    const result = await query(sql, values);
    return result;
  } catch (error) {
    console.error('Error creating order in DB:', error);
    throw error;
  }
};

export const getOrderById = async (id_pesanan) => {
  const sql = 'SELECT * FROM akun.form_pesanan WHERE id_pesanan = ?';

  try {
    const result = await query(sql, [id_pesanan]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    throw error;
  }
};

export const deleteOrderById = async (id_pesanan) => {
  const sql = 'DELETE FROM akun.form_pesanan WHERE id_pesanan = ?';

  try {
    const result = await query(sql, [id_pesanan]);
    return result;
  } catch (error) {
    console.error('Error deleting order by ID:', error);
    throw error;
  }
};
