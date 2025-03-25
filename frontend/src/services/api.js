// filepath: /blockchain-frontend/blockchain-frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Replace with your backend URL

export const fetchBlockchainData = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/blockchain`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blockchain data:', error);
        throw error;
    }
};

export const submitTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_URL}/api/transactions`, transaction);
        return response.data;
    } catch (error) {
        console.error('Error submitting transaction:', error);
        throw error;
    }
};

export const checkBalance = async (address) => {
    try {
        const response = await axios.get(`${API_URL}/api/balance/${address}`);
        return response.data;
    } catch (error) {
        console.error('Error checking balance:', error);
        throw error;
    }
};