import React, { useEffect, useState } from 'react';
import { fetchResults } from '../services/api';
import ResultChart from '../components/ResultChart';

const ResultAnalysis: React.FC = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getResults = async () => {
            try {
                const data = await fetchResults();
                setResults(data);
            } catch (err) {
                setError('Failed to fetch results');
            } finally {
                setLoading(false);
            }
        };

        getResults();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Result Analysis</h1>
            <ResultChart results={results} />
            {/* Additional analysis components can be added here */}
        </div>
    );
};

export default ResultAnalysis;