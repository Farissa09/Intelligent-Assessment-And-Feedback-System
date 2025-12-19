import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import AuthForm from '../components/AuthForm';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        try {
            await registerUser(formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <AuthForm onSubmit={handleRegister} />
        </div>
    );
};

export default Register;