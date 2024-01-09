import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const Posts = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updatedPost, setUpdatePost] = useState({

    });

    const navigate = useNavigate();
    const [posts, setPosts] = useState([])    
    useEffect(() => {
        axios.get('/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)   
        })
        .catch(err => console.log(err))
    }, [])

    const deletePost = (id) => {
        // console.log(id);
        axios.delete(`/delete/${id}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
       window.location.reload();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatePost((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const updatePost = (post) => {
        setUpdatePost(post)
        handleShow()
    }

    const saveUpdatedPost = () => {
        axios.put(`/update/${updatedPost._id}`, updatedPost)
            .then(res => {
                console.log("Update response:", res);
                handleClose(); // Close the modal after saving.
                window.location.reload(); // Reload the page after saving.
            })
            .catch(err => console.log("Update error:", err));
    }
    
    

  return (
    <div style={{width: "90%", textAlign: "center",
    margin: "auto auto"}}>
        <h1>Posts</h1>
        <Button 
            style={{
                width: "100%",
                marginBottom: "1rem"
            }}
            onClick={() => navigate(-1)}>Back</Button>
        {
           posts ? (
            <>
                {
                    posts.map(post => {
                        return (
                            <div
                                style={{
                                    border: "solid lightgray 1px",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    padding: "1rem",
                                }}
                            >
                                <h4>{post.title}</h4>
                                <p>{post.description}</p>
                                <div style={{ 
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                    }}>
                                <Button 
                                    onClick={() => updatePost(post)}
                                    variant='outline-info'
                                    style={{ width: "100%", marginRight: "1rem"}}>
                                        UPDATE</Button>
                                <Button
                                    onClick={() => deletePost(post._id)}
                                    variant='outline-danger'
                                    style={{ width: "100%" }}
                                >DELETE</Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Update a post</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group>
                                            <Form.Control 
                                                style={{ marginBottom: "1rem"}}
                                                placeholder="title"
                                                name='title'
                                                value={updatedPost.title ? updatedPost.title : ""}
                                                onChange={handleChange}
                                            />
                                             <Form.Control
                                                name='description'
                                                value={updatedPost.description ? updatedPost.description : ""}
                                                style={{ marginBottom: "1rem"}}
                                                placeholder="Description"
                                                onChange={handleChange}
                                            />
                                            </Form.Group>
                                        </Form>    
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={saveUpdatedPost}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                </div>
                            </div>
                        )
                    })
                }
            </>
           ) : (
                ""
           )
        }
    </div>
  )
}

export default Posts