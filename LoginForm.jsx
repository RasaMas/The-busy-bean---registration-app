import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

const LoginForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                username, 
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }
    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>The Busy Bean</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon'/>
                </div>
                
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Do not have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}; 

export default LoginForm;