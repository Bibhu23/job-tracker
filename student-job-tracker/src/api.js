// src/api.js
import axios from 'axios'; // ✅ Correct way to import axios

const API = axios.create({
    baseURL: 'http://localhost:5000/api/jobs', // The base URL of your backend API (adjust as needed)
});

export default API;
