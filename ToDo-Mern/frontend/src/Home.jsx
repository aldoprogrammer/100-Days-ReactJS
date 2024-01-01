import React, { useEffect, useState } from 'react'
import Create from './Create'
import { BsFillTrashFill, BsCircleFill, BsFillCheckCircleFill} from "react-icons/bs";
import axios from 'axios';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
      axios.put('http://localhost:3001/update/'+id)
      .then(result => {
        location.reload();
      })
      .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {
        location.reload();
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='home'>
      <h2>Todo List by Aldo</h2>
      <Create />
      {
        todos.length === 0
        ?
        <div><h2>No Todo List Yet</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
              <div className='checkbox'
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? 
                  <BsFillCheckCircleFill className='icon'/>
                  :
                  <BsCircleFill className='icon'/>
                }
                <p className={todo.done ? "line_trough" : ""}>{todo.task}</p>
              </div>
                <div>
                  <span><BsFillTrashFill 
                    className='icon'
                    onClick={() => handleDelete(todo._id)}
                    /></span>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Home
