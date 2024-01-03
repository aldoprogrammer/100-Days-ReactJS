// BlogList.js
import React from 'react';

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className='flex flex-col'>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
