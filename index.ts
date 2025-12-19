// This file defines TypeScript types used throughout the client application.

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Test {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
}

export interface Result {
    testId: string;
    userId: string;
    score: number;
    totalQuestions: number;
    feedback: string;
}

export interface Notification {
    id: string;
    message: string;
    date: Date;
    read: boolean;
}