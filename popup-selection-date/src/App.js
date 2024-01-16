import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const handleClick = async () => {
    const { value: date } = await Swal.fire({
      title: "select departure date",
      input: "date",
      didOpen: () => {
        const today = (new Date()).toISOString();
        Swal.getInput().min = today.split("T")[0];
      }
    });
    if (date) {
      Swal.fire("Departure date", date);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <button onClick={handleClick}>Pop Up Date</button>
      </header>
    </div>
  );
}

export default App;
