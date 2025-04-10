// src/api.js
import axios from 'axios';

// Dynamically set the base URL based on the environment
const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://job-tracker-8.onrender.com/api/jobs'  // Production URL
    : 'http://localhost:5000/api/jobs';               // Local development URL

const API = axios.create({
    baseURL: baseURL,
});

export default API;
