import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000)
  }
  return (
   <div>
      <h1>{value}</h1>
      <button
        type='button'
        onClick={handleClick}
      >Increase</button>
   </div>
  );
}

export default App;
