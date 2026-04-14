"use client"

import {useEffect} from 'react';

export default function ErrorPage({error}: {error: Error}){
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <h1 style={{color: 'red'}}>Error fetching user data</h1>
    )
}