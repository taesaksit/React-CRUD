import axios from "axios";

const API_URL = 'http://localhost:5500/api/categories';

export const fetchCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (err) {
        throw new Error('Failed to fetch products');

    }
};

export const addCategory = async (categoryData) => {
    try {
        const response = await axios.post(API_URL, categoryData);
        return response;

    } catch (err) {
        throw new Error('Failed to add category');

    }
};

export const deleteCategory = async (categoryData) => {
    try {
        const response = await axios.delete(`${API_URL}/${categoryData}`);
        return response;

    } catch (err) {
        throw new Error('Failed to add category');

    }
};


export const updateCategory = async (id, categoryData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, categoryData);
        return response;

    } catch (err) {
        throw new Error('Failed to add category');

    }
};
