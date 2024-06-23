import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/", // Adjust this according to your backend URL
});

export default instance;
