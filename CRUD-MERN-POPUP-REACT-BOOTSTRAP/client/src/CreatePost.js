import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setPost(prev => {
            return({
                ...prev,
                [name]: value,
            })
        })
    }

    const handleClick = (event) => {
        event.preventDefault();
        axios.post('/create', post)
        .then(res => console.log(res))
        .catch(err => console.error(err));

        navigate('posts');
    }


    return (
      <div style={{ width: "90%", margin: "auto auto", textAlign: "center"}}>
          <h1>CreatePost</h1>
          <Form>
            <Form.Group>
                <Form.Control 
                    name='title'
                    placeholder='Title'
                    style={{ marginBottom: "1rem"}}
                    onChange={handleChange}
                    value={post.title} 
                    />
                <Form.Control 
                    name='description'
                    placeholder='Description'
                    style={{ marginBottom: "1rem"}}
                    onChange={handleChange}
                    value={post.description}
                    />
                
            </Form.Group>
            <Button
                style={{ width: "100%", marginBottom: "1rem"}}
                variant='outline-success'
                onClick={handleClick}
            >Create a Post</Button>
          </Form>
          <Button 
            onClick={() => navigate(-1)} 
            variant='outline-dark'
            style={{ width: "100%"}}
            >Back</Button>
      </div>
    )
  
}

export default CreatePost