// src/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api/jobs' // ✅ no trailing slash, no space
});


export default API;
