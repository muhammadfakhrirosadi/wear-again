// const Profile = require("../models/profileModel");
// const { Await } = require("react-router-dom");
import { query } from "../database/db.js";

// const getProfile = async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ where: { id: 1 } });
//     res.status(200).json(profile);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch profile" });
//   }
// };

const getProfile = async (req, res) => {
  try {
    const profile = await query("SELECT * FROM users");
    return res.status(200).json({ msg: "sukses", data: profile });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};

const updateProfile = async (req, res) => {
  const { username, email, password, no_wa, alamat, created_at, google_id } =
    req.body;
  const { id } = req.params;
  try {
    await query(
      "INSERT INTO users (username, email, password, no_wa, alamat, created_at, google_id) values (?, ?, ?, ?, ?, ?, ?)",
      [username, email, password, no_wa, alamat, created_at, google_id]
    );
    console.log("data berhasil di update");
    res.status(200).json({ msg: "sukses" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

export { getProfile, updateProfile, query };
