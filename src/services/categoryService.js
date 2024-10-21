import axios from "axios";

const API_URL = 'http://localhost:5500/api/categories';

export const fetchCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (err) {
        throw new Error('Failed to fetch products');

    }
}
