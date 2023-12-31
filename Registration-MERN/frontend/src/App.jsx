import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {
      name, email, password
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center
    align-items-center bg-primary vh-100'>
      <div className='bg-white p-3
      rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your Email'
              name='email'
              className='form-control rounded-0'
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
              onChange={(e) => setPassowrd(e.target.value)}
            />
          </div>
          <button type='submit'
            className='btn btn-success
            w-100 rounded-0'
          >
            Register
          </button>
          <p>Already have an account</p>
          <button className='btn btn-default border
          w-100 bg-light rounded-0
          text-decoration-none'>
            Loigin
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
