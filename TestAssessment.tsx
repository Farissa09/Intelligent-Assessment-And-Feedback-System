import React, { useState, useEffect } from 'react';
import { fetchAssessmentQuestions, submitAssessment } from '../services/api';
import TestQuestion from '../components/TestQuestion';

const TestAssessment = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const loadQuestions = async () => {
            const data = await fetchAssessmentQuestions();
            setQuestions(data);
        };
        loadQuestions();
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleSubmit = async () => {
        const result = await submitAssessment(answers);
        setFeedback(result.feedback);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Test Assessment</h1>
            {submitted ? (
                <div>
                    <h2>Feedback</h2>
                    <p>{feedback}</p>
                </div>
            ) : (
                <div>
                    {questions.map(question => (
                        <TestQuestion
                            key={question.id}
                            question={question}
                            onAnswerChange={handleAnswerChange}
                        />
                    ))}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default TestAssessment;