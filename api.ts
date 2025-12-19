import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to login a user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch student dashboard data
export const fetchDashboardData = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/student/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to submit test assessment
export const submitAssessment = async (assessmentData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/assessment/submit`, assessmentData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch result analysis
export const fetchResultAnalysis = async (studentId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/assessment/results/${studentId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch notifications
export const fetchNotifications = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/notifications`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};