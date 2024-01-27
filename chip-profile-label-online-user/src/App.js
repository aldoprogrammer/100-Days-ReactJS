import { Chip, Avatar, Typography } from "@material-tailwind/react";

import './App.css';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function App() {
  return (
    <div className="w-screen h-auto
    p-10 flex flex-wrap gap-6">
      <Chip
      icon={
        <Avatar
          size="xs"
          variant="circular"
          className="h-full w-full -translate-x-0.5"
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      }
      value={
        <Typography
          variant="small"
          color="white"
          className="font-medium capitalize leading-none"
        >
          Tania Andrew
        </Typography>
      }
      className="rounded-full py-1.5"
    />

<div className="flex gap-2">
      <Chip
        variant="ghost"
        color="green"
        size="sm"
        value="Online"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
        }
      />
      <Chip
        variant="ghost"
        color="red"
        size="sm"
        value="Offline"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
        }
      />
    </div>
    <div className="flex gap-2">
      <Chip value="chip filled" className="rounded-full" />
      <Chip variant="gradient" value="chip gradient" className="rounded-full" />
      <Chip variant="outlined" value="chip outlined" className="rounded-full" />
      <Chip variant="ghost" value="chip ghost" className="rounded-full" />
    </div>

    <div className="flex gap-2">
      <Chip value="account" icon={<Icon />} />
      <Chip value="account" variant="gradient" icon={<Icon />} />
      <Chip value="account" variant="outlined" icon={<Icon />} />
      <Chip value="account" variant="ghost" icon={<Icon />} />
    </div>

    <div className="flex gap-2">
      <Chip color="blue" value="blue" />
      <Chip color="red" value="red" />
      <Chip color="green" value="green" />
      <Chip color="amber" value="amber" />
      <Chip color="pink" value="pink" />
      <Chip color="indigo" value="indigo" />
      <Chip color="purple" value="purple" />
      <Chip color="teal" value="teal" />
      <Chip color="cyan" value="cyan" />
    </div>


    </div>

  );
}

export default App;
