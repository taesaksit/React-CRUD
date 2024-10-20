import axios from "axios";

const API_URL = 'http://localhost:5500/api/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (err) {
        throw new Error('Failed to fetch products');

    }
}

export const deleteProduct = async (productId) => {
    try {
        await axios.delete(`${API_URL}/${productId}`);
    } catch (err) {
        throw new Error('Failed to delete product');
    }
};

export const updateProduct = async (productId, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, updatedData);
      return response;
    } catch (err) {
      throw new Error('Failed to update product');
    }
  };