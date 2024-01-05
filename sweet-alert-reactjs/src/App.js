import logo from './logo.svg';
import Swal from 'sweetalert2'

function App() {

  const handleAlert = () =>  {
    Swal.fire({
      title: "Are you sure you want to leave?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout Succesfully!",
          icon: "success"
        });
      }
    });
  }
  return (
   <div>
    <button onClick={handleAlert}>Click Me</button>
   </div>
  );
}

export default App;
