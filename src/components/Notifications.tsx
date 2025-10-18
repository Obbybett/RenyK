import React from 'react';

const Notifications: React.FC = () => {
    const notifications = [
        { id: 1, message: 'Rent is due in 3 days.', type: 'alert' },
        { id: 2, message: 'Repair request has been updated.', type: 'info' },
        { id: 3, message: 'New message from your landlord.', type: 'message' },
    ];

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id} className={notification.type}>
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;