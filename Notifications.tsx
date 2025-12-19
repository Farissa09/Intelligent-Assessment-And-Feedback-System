import React, { useEffect, useState } from 'react';
import NotificationCenter from '../components/NotificationCenter';
import { fetchNotifications } from '../services/api';

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const getNotifications = async () => {
            const data = await fetchNotifications();
            setNotifications(data);
        };

        getNotifications();
    }, []);

    return (
        <div className="notifications-page">
            <h1>Your Notifications</h1>
            <NotificationCenter notifications={notifications} />
        </div>
    );
};

export default Notifications;