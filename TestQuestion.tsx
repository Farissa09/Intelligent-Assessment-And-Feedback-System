import React from 'react';

interface TestQuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, options, onAnswer }) => {
    return (
        <div className="test-question">
            <h3>{question}</h3>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => onAnswer(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestQuestion;