import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { NotificationCenter } from '../components/NotificationCenter';
import { ResultChart } from '../components/ResultChart';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <h1>Welcome, {user?.name}!</h1>
            <NotificationCenter />
            <ResultChart />
            {/* Additional dashboard components can be added here */}
        </div>
    );
};

export default Dashboard;