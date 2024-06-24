import { query } from '../database/db.js';
import upload from '../config/multerConfig.js';

export const fetchUserInfo = async (req, res) => {
  const userId = req.params.userId;
  try {
    const result = await query("SELECT username, email, phone, address FROM users WHERE id = ?", [userId]);
    if (result.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user info', error: err });
  }
};

export const createDonation = async (req, res) => {
  const { items, mobilisasiOption, mobilisasiTime } = req.body;
  const userId = req.user.userId;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Items must be a non-empty array' });
  }

  const imageFilenames = req.files.map(file => file.filename);
  const gambarBarang = imageFilenames.join(', '); // Join filenames into a single string

  try {
    const donationPromises = items.map(async item => {
      const parsedTime = new Date(mobilisasiTime);

      if (isNaN(parsedTime.getTime())) {
        throw new Error('Invalid date');
      }

      const formattedTime = parsedTime.toISOString().slice(0, 19).replace('T', ' ');

      await query("INSERT INTO donations (id_user, jenis_barang, nama_barang, gambar_barang, jumlah, kondisi, opsi_mobilisasi, waktu_donasi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [userId, item.jenis, item.nama, gambarBarang, item.jumlah, item.kondisi, mobilisasiOption, formattedTime]);
    });

    await Promise.all(donationPromises);

    res.status(201).json({ message: 'Donation created successfully' });
  } catch (err) {
    console.error("Error creating donation:", err);
    res.status(500).json({ message: 'Error creating donation', error: err.message });
  }
};

export const deleteDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await query("DELETE FROM donations WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.status(204).send(); // No Content
  } catch (err) {
    console.error("Deletion failed", err);
    res.status(500).json({ message: 'Server error' });
  }
};
