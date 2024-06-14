"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";


export default function Crews() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                setUsers(response.data.results); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Crews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users.map(user => (
                    <div className="bg-gray-600 p-6 rounded-lg shadow-md relative">
                        <div className="w-full h-48 bg-gray-200 mb-4 relative">
                            <img
                                src={user.picture.thumbnail}
                                alt="Crew Image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>         
                        <h3 className="text-2xl font-bold mb-3 text-center">{user.name.first} {user.name.last}</h3>
                        <ul className="text-lg mb-4">
                            <li><strong>{user.email}</strong></li>
                            <li><strong>{user.phone}</strong></li>
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}
