import React, { useState } from 'react';

const Register: React.FC = () => {
    const [userType, setUserType] = useState<'tenant' | 'landlord'>('tenant');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(e.target.value as 'tenant' | 'landlord');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('User registered:', { userType, ...formData });
    };

    return (
        <div className="register-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userType">I am a:</label>
                    <select id="userType" value={userType} onChange={handleUserTypeChange}>
                        <option value="tenant">Tenant</option>
                        <option value="landlord">Landlord</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;