import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BlogList from './BlogList';

function App() {
  const [blogs, setBlogs] = useState([
    { title: 'My web', body: 'lorem ipusm', author: 'mario', id: '1'},
    { title: 'My car', body: 'lorem ipusm', author: 'cahya', id: '2'},
    { title: 'My home', body: 'lorem ipusm', author: 'bayu', id: '3'}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use efect run');
    console.log(blogs);
  })
  return (
    <div>
      <BlogList blogs={blogs} title="All blogs" 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
