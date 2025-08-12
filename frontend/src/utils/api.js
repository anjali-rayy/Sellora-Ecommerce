import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
};
