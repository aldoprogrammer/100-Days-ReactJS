import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="App">
     
     <Button onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default App;
