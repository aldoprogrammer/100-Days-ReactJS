import React from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
    <div className='d-flex justify-content-center
    align-items-center bg-secondary
    vh-100'>
       <div className='bg-white p-3 rounded w-25'>
      <Link to='/register'
      className='btn btn-warning border
      w-100 rounded-0
      text-decoration-none'>Register</Link>
      <Link to='/login'
      className='btn btn-success border
      w-100 rounded-0
      text-decoration-none'>Login</Link>
      <Link to='/home'
      className='btn btn-primary border
      w-100 rounded-0
      text-decoration-none'>Home</Link>
      </div>
    </div>
  )
}

export default Front
