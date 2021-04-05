import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import UsersCard from './UsersCard';

const Users = () => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users', {
                    cancelToken: source.token,
                });
                setTimeout(() => {
                    setAuthors(res.data);
                    setLoading(false);
                }, 200);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    throw error;
                }
            }
        };
        fetchUsers();
        return () => {
            source.cancel();
        };
    }, [setAuthors]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="users-container">
                    {authors.map((aut) => (
                        <UsersCard key={aut.userId} user={aut} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Users;
