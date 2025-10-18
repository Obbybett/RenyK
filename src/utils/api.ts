import axios from 'axios';

const API_BASE_URL = 'https://api.tenantconnect.co.ke'; // Replace with your actual API base URL

// Function to handle API calls
const apiCall = async (endpoint, method = 'GET', data = null) => {
    try {
        const response = await axios({
            url: `${API_BASE_URL}${endpoint}`,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

// Function to fetch rent payments
export const fetchRentPayments = async (tenantId) => {
    return await apiCall(`/tenants/${tenantId}/rent-payments`);
};

// Function to fetch maintenance requests
export const fetchMaintenanceRequests = async (tenantId) => {
    return await apiCall(`/tenants/${tenantId}/maintenance-requests`);
};

// Function to authenticate user
export const authenticateUser = async (credentials) => {
    return await apiCall('/auth/login', 'POST', credentials);
};

// Function to register a new user
export const registerUser = async (userData) => {
    return await apiCall('/auth/register', 'POST', userData);
};

// Function to fetch user profile
export const fetchUserProfile = async (userId) => {
    return await apiCall(`/users/${userId}`);
};