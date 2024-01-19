import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Home = () => {
    const [swalShown, setSwalShown] = useState(false)

    const showSwal = () => {
      Swal.fire({
        didOpen: () => setSwalShown(true),
        didClose: () => setSwalShown(false),
      })
    }
  return (
    <div>Home
          <button onClick={showSwal}>Show SweetAlert2 modal</button>
      {/* Use createPortal to use the same state between your app and SweetAlert2 */}
      {swalShown &&
        createPortal(
          <Link to="/about" onClick={() => Swal.close()}>
            Go to About
          </Link>,
          Swal.getHtmlContainer()
        )}

    </div>
  )
}

export default Home