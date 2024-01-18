import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const handleClick = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Multiple inputs",
      html: `
        <input id="swal-input1" class="swal2-input">
        <input id="swal-input2" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      }
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }
  return (
    <div className="App">
     <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
