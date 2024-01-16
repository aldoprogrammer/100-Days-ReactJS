import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const clickMe = async () => {
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    if (accept) {
      Swal.fire("You agreed with T&C :)");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickMe}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
