import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password})
        .then(result => {
            console.log(result)
            if (result.data === "Success Login") {
                navigate('/home');
            }            
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center
    align-items-center bg-secondary
    vh-100'>
       <div className='bg-white p-3 rounded w-25'>
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type="email" name="email" id="" 
                    className='form-control rounded-0'
                    autoComplete='off' placeholder='type email..'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input type="password" name="password" id="" 
                    className='form-control rounded-0'
                    autoComplete='off' placeholder='type pwd..'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className='btn btn-success w-100
            rounded-0' type='submit'>
                Login
            </button>
        </form>
        <p>Dont have an account?</p>
            <Link to='/register' className='btn btn-default border
            w-100 bg-light rounded-0
            text-decoration-none'>
                Register    
            </Link>
        </div> 
    </div>
  )
}

export default Login
