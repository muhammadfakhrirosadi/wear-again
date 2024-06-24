import { createOrderInDB, getOrderById, deleteOrderById } from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  const { id_barang, nama_barang, gambar_barang, brand, kondisi, kode_promo, opsi_pengiriman, waktu_pengambilan, total_harga } = req.body;
  const id_user = req.user.userId;

  try {
    const orderDetails = {
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
    };

    const result = await createOrderInDB(orderDetails);
    res.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

export const getOrder = async (req, res) => {
  const { id_pesanan } = req.params;

  try {
    const order = await getOrderById(id_pesanan);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
};

export const removeOrder = async (req, res) => {
  const { id_pesanan } = req.params;

  try {
    const result = await deleteOrderById(id_pesanan);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
};
