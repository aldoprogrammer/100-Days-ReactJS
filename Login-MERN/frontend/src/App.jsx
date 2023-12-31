import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      email, password
    }).then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
<div className='d-flex justify-content-center
    align-items-center bg-primary vh-100'>
      <div className='bg-white p-3
      rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your Email'
              name='email'
              className='form-control rounded-0'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter your pwd'
              name='password'
              className='form-control rounded-0'
              autoComplete='off'
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button type='submit'
            className='btn btn-success
            w-100 rounded-0'
          >
            Login
            </button>
          <p>You have read our policies and terms condition</p>
          <button className='btn btn-default border
          w-100 bg-light rounded-0
          text-decoration-none'>
            Create Account
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default App
