const axios = require('axios');

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

(async () => {
  try {
    console.log('Usando baseURL =', baseURL);
    const res = await axios.get(`${baseURL}/trips`, { withCredentials: true });
    console.log('status:', res.status);
    console.log('data:', res.data);
  } catch (err) {
    if (err.response) {
      console.error('status:', err.response.status);
      console.error('body:', err.response.data);
    } else {
      console.error('error:', err.message);
    }
    process.exit(1);
  }
})();
