import React from "react";
import { Avatar, Rating, Typography } from "@material-tailwind/react";
 
export default function App() {
  const [rated, setRated] = React.useState(4);
 
  return (
    <div className="grid md:grid-cols-2 mx-auto w-10/12 my-8
    grid-cols-1">
    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        Based on 134 Reviews
      </Typography>
    </div>
     <div className="px-8 text-center">
     <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
       &quot;This is an excellent product, the documentation is excellent and
       helped me get things done more efficiently.&quot;
     </Typography>
     <Avatar
       src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
       alt="image"
       size="lg"
     />
     <Typography variant="h6" className="mt-4">
       Tania Andrew
     </Typography>
     <Typography color="gray" className="mb-4 font-normal">
       Lead Frontend Developer
     </Typography>
     <Rating value={5} readonly />
   </div>
   </div>
)};
