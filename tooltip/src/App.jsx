import { Tooltip, Button } from "@material-tailwind/react";
 
export default function App() {
  return (
    <Tooltip
      content="Material Tailwind"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button>Show Tooltip</Button>
    </Tooltip>
  );
}