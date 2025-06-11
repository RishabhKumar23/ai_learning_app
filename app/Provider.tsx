'use client';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({ children }: { children: React.ReactNode }) => {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState();

    async function CreateNewUser() {
        const result = await axios.post('/api/user', {
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress
        });

        //NOTE - axois is used to make API calls
        console.log("User created:", result.data);
        console.log("axios response:");

        setUserDetail(result.data);
    }

    useEffect(() => {
        if (user) {
            CreateNewUser();
        }
    }, [user]);

    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                {children}
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider