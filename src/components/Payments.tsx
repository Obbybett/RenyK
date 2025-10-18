import React, { useState } from 'react';

const Payments: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>('mpesa');
    const [receipt, setReceipt] = useState<string | null>(null);

    const handlePayment = async () => {
        // Implement payment processing logic here
        // This is a placeholder for actual payment processing
        const generatedReceipt = `Receipt for KES ${amount} paid via ${paymentMethod}`;
        setReceipt(generatedReceipt);
    };

    return (
        <div className="payments-container">
            <h2>Make a Payment</h2>
            <div>
                <label htmlFor="amount">Amount (KES):</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="mpesa">M-Pesa</option>
                    <option value="card">Credit/Debit Card</option>
                </select>
            </div>
            <button onClick={handlePayment}>Pay Now</button>
            {receipt && <div className="receipt">{receipt}</div>}
        </div>
    );
};

export default Payments;