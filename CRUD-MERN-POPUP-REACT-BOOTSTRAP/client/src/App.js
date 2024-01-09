import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './App.css'
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h2>Home page</h2>
      <Button
        variant='outline-dark'
        style={{ width: "100%"}}
        onClick={() => navigate("create")}
      >Next</Button>
    </div>
  );
}

export default App;
