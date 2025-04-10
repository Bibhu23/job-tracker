
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://job-tracker-8.onrender.com/api/jobs'  
    : 'http://localhost:5000/api/jobs';              

const API = axios.create({
    baseURL: baseURL,
});

export default API;
