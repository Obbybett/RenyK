import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming there's a specific CSS file for Home component

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to TenantConnect Kenya</h1>
                <p>Your one-stop solution for rent management and landlord-tenant communication.</p>
            </header>
            <main className="home-main">
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Manage your rent payments easily</li>
                        <li>Communicate directly with your landlord</li>
                        <li>Receive real-time notifications</li>
                        <li>Access your payment history</li>
                    </ul>
                </section>
                <section className="cta">
                    <h2>Get Started</h2>
                    <Link to="/register" className="btn">Create an Account</Link>
                    <Link to="/login" className="btn">Login</Link>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} TenantConnect Kenya. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;