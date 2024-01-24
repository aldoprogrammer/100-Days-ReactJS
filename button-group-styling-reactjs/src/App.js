import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@material-tailwind/react';

function App() {
  return (
    <div className="App">
       <ButtonGroup ripple={false}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="green">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
