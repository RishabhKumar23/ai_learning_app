'use client';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import axios from 'axios';

const Provider = ({ children }: { children: React.ReactNode }) => {

    const { user } = useUser();

    const CreateNewUser = async () => {
        const result = await axios.post('/api/user', {
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress
        });

        //NOTE - axois is used to make API calls
        console.log("User created:", result.data);
        console.log("axios response:");
    }

    useEffect(() => {
        if (user) {
            CreateNewUser();
        }
    }, [user]);

    return (
        <div>
            {children}
        </div>
    )
}

export default Provider