"use client";

import { useState } from 'react';

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({ message = "An error occurred while loading the component." }: { message?: string }) => {
    const [error, setError] = useState(false);

    if (error) throw new Error(message);

    return (
        <button
            title="Simulate an error"
            onClick={() => setError(true)}
        >
            Simulate Error
        </button>
    );
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div>
            <div>
                <ErrorSimulator message='Simulated error in root layout' />
            </div>
            {children}
        </div>
    )
}

export default ErrorWrapper;