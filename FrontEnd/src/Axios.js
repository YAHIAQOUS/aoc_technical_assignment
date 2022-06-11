/** @format */

import axios from 'axios';

// API URL
export const apiUrl = 'http://localhost:8000';

// Instance of Axios
const axiosInstance = axios.create({
  baseUrl: apiUrl,
});

export default axiosInstance;
