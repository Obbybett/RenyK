import React, { useEffect, useState } from 'react';
import { fetchRentPayments } from '../utils/api';

const RentManagement: React.FC = () => {
    const [rentPayments, setRentPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRentPayments = async () => {
            try {
                const payments = await fetchRentPayments();
                setRentPayments(payments);
            } catch (err) {
                setError('Failed to load rent payments');
            } finally {
                setLoading(false);
            }
        };

        loadRentPayments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="rent-management">
            <h2>Rent Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rentPayments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{new Date(payment.date).toLocaleDateString()}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RentManagement;