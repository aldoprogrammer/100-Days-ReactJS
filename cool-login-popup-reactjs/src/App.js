import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  let usernameInput;
  let passwordInput;

  const handleClick = async () => {
    Swal.fire({
      title: 'Login Form',
      html: `
        <input type="text" id="username" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
      `,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup();
        usernameInput = popup.querySelector('#username');
        passwordInput = popup.querySelector('#password');
        usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
        passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
      },
      preConfirm: () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
          Swal.showValidationMessage(`Please enter username and password`);
        }

        // Log the values
        console.log('Username:', username);
        console.log('Password:', password);

        return { username, password };
      },
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Input Pop up Logn</button>
    </div>
  );
}

export default App;
