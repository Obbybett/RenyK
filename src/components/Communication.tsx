import React, { useState, useEffect } from 'react';

const Communication: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    useEffect(() => {
        // Fetch existing messages from the server or local storage
        const fetchMessages = async () => {
            // Placeholder for fetching messages
            const fetchedMessages = await fetch('/api/messages'); // Adjust the API endpoint as needed
            const data = await fetchedMessages.json();
            setMessages(data);
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            // Placeholder for sending a message to the server
            await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newMessage }),
            });

            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className="communication-container">
            <h2>Communication</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Communication;