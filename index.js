require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error("Error in /api/products:", error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Fetch a single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`Error in /api/products/${req.params.id}:`, error);
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
