import React, { useState } from 'react';
import { LoginUser } from '../../services/apiservice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userEmailId, setuserEmailId] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    // Add API call to handle login functionality using email and password
    // For simplicity, just show a console message here
    LoginUser(userEmailId, userPassword)
      .then(re => {
        toast.success("Login Successfully!!")
        navigate("/dashboard")
        console.log(re.data);
      }).catch(err => console.log(err))
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={userEmailId}
          onChange={(e) => setuserEmailId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setuserPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
