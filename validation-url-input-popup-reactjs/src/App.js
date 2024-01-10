import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const handleClick = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  }
  return (
    <div className="App">
      <h2>Validate INput URL</h2>
      <button
        onClick={handleClick}
      >Click Me</button>
    </div>
  );
}

export default App;
