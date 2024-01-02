import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/home')
        .then(result => {console.log(result)
          if(result.data !== "Success"){
            // navigate('/login')
          }
        }).catch(err => console.log(err))
  })
  return (
    <div>
      Home
    </div>
  )
}

export default Home
