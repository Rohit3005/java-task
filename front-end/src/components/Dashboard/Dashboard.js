import React, { useEffect, useState } from 'react';
import { getAllUser } from '../../services/apiservice';

const Dashboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUser().then(ww => setUsers(ww.data)).catch(ee => console.log(ee))
    }, [])



    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.userEmailId}</td>
                            <td>{user.userPassword}</td>
                            <td>{user.userName}</td>
                            <td>{user.userAddress}</td>
                            <td>{user.userRole}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default Dashboard;
