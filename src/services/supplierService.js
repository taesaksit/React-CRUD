import axios from "axios";

const API_URL = 'http://localhost:5500/api/supplier';

export const fetchSuppliers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (err) {
        throw new Error('Failed to fetch products');

    }
};

export const addSupplier = async (supplierData) => {
    try {
        const response = await axios.post(API_URL,supplierData);
        return response;

    } catch (err) {
        throw new Error('Failed to fetch products');

    }
};