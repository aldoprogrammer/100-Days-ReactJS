import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/add',{task: task})
    .then(result => {
      location.reload();
    })
    .catch(err => console.error(err));
  }
  return (
    <div className='create_form'>
      <input type="text" name="" id="" 
      placeholder='Type here ...'
      onChange={(e) => setTask(e.target.value)}/>
      <button type="button"
        onClick={handleAdd}
      >Add</button>
    </div>
  )
}

export default Create
