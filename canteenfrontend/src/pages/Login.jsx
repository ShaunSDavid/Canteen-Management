import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const isAdmin = username === 'admin' && password === 'admin'; // Example admin credentials
        try{
            const response=await axios.post("http://localhost:8080/login",{
                username,
                password
            })
            if (isAdmin) {
                // Navigate to the admin dashboard if admin credentials are correct
                navigate('/admin');
            } else {
                // For regular users, navigate to the user dashboard
                // Here you can add your logic to authenticate the user with the provided username and password
                console.log('Submitting username:', username);
                console.log('Submitting password:', password);
                setStatus(true);
                navigate('/dashboard');
            }
        }catch(error){
            console.log("Login Failed",error);
        }
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '10px', margin: '8px 0', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', margin: '8px 0', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required />
                </label>
                <br />
                <button type="submit" style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
            </form>
        </div>
    );
}

export default Login;
