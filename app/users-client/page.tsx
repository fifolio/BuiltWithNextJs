"use client";

import { useState, useEffect } from 'react';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error('Failed to fetch users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Users - Client</h1>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                    >
                        <div>{user.name}</div>
                        <div>
                            <div>username: {user.username}</div>
                            <div>email: {user.email}</div>
                            <div>phone: {user.phone}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}