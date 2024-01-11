import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const handleTermsCondition = () => {
    Swal.fire({
      title: "Terms Condition",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqu fugiat nulla pariatur nulla pariatur aut",
    });
  }

  const handlePrivayPolicy = () => {
    Swal.fire({
      title: "Privacy Policy",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqu fugiat nulla pariatur nulla pariatur aut",
    });
  }
  return (
    <div className="App">
     <p onClick={handleTermsCondition}>Terms n Condition</p>
     <p onClick={handlePrivayPolicy}>Privacy Policy</p>
     
    </div>
  );
}

export default App;
