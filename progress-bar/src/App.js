import { Progress, Typography } from "@material-tailwind/react";
 
export default function App() {
  return (
    <div className="row w-10/12 grid grid-cols-2 gap-4
    mx-auto">
          
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          In Progress
        </Typography>
        <Typography color="blue-gray" variant="h6">
          50%
        </Typography>
      </div>
      <Progress value={50} />
    </div>

   
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          In Progress
        </Typography>
        <Typography color="blue-gray" variant="h6">
          50%
        </Typography>
      </div>
      <Progress value={50} />
    </div>

    </div>
  );
}