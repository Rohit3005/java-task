import React, { useState } from 'react';
import { registerUser } from '../../services/apiservice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userEmailId, setuserEmailId] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userRole, setUserRole] = useState('');
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        // Add API call to handle user registration using email and password
        // For simplicity, just show a console message here
        const user = {
            userEmailId,
            userPassword,
            userName,
            userAddress,
            userRole
        }
        registerUser(user).then(e => {
            toast.success("Register Successfull")
            navigate("/")
        }).catch(ee => console.log(ee))
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Email"
                    value={userEmailId}
                    onChange={(e) => setuserEmailId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setuserPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
