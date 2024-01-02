import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login';
import Home from './Home';
import Front from './Front';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Front />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
