import React from 'react';
import { MdHome, MdAttachMoney, MdReportProblem, MdChat } from 'react-icons/md';
import RentManagement from '../components/RentManagement';
import Communication from '../components/Communication';
import Payments from '../components/Payments';
import Notifications from '../components/Notifications';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container" style={{ maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <MdHome size={32} color="#009688" />
                <h1 style={{ color: '#009688', margin: 0 }}>TenantConnect Kenya</h1>
            </header>
            <section style={{ marginBottom: '2rem', background: '#f5f5f5', padding: '1rem', borderRadius: 8 }}>
                <h2>Welcome!</h2>
                <p>
                    Manage your rent, report issues, and chat with your landlord — all in one place.
                </p>
            </section>
            <nav style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <MdAttachMoney size={28} color="#009688" />
                    <div>Rent</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <MdReportProblem size={28} color="#009688" />
                    <div>Issues</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <MdChat size={28} color="#009688" />
                    <div>Chat</div>
                </div>
            </nav>
            <main>
                <RentManagement />
                <Payments />
                <Communication />
                <Notifications />
            </main>
        </div>
    );
};

export default Dashboard;