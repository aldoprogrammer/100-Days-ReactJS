import { Badge, IconButton, Avatar, Button } from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="w-96 h-auto bg-blue-700 p-4
    flex flex-row items-center mt-10 gap-4">
      <Badge content="5" className="mr-10">
        <IconButton>
          <HomeIcon className="h-4 w-4" />
        </IconButton>
      </Badge>
      <Badge>
        <IconButton>
          <HomeIcon className="h-4 w-4" />
        </IconButton>
      </Badge>
      <Badge content="5" overlap="circular" placement="bottom-end">
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          alt="profile picture"
        />
      </Badge>
      <Badge content="5" onClick={handleShow}>
        <Button>Notifications</Button>
      </Badge>
    </div>
  );
}

export default App;
