import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const handleClick = async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password) {
      Swal.fire(`Entered password: ${password}`);
    }
  }
  return (
    <div className="App">
      <h2>input pwd</h2>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
