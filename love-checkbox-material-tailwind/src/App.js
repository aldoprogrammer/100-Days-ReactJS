import logo from './logo.svg';
import './App.css';
import { Card, Checkbox, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';

function App() {
  return (
    <div className="App flex flex-wrap gap-10
    p-10">
      <Checkbox
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      }
      defaultChecked
    />
     <Checkbox
      label={
        <Typography color="blue-gray" className="flex font-medium">
          I agree with the
          <Typography
            as="a"
            href="#"
            color="blue"
            className="font-medium transition-colors hover:text-blue-700"
          >
            &nbsp;terms and conditions
          </Typography>
          .
        </Typography>
      }
    />

<Checkbox
      label={
        <div>
          <Typography color="blue-gray" className="font-medium">
            Remember Me
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            You&apos;ll be able to login without password for 24 hours.
          </Typography>
        </div>
      }
      containerProps={{
        className: "-mt-5",
      }}
    />

<Card>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              React.js
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Vue.js
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Svelte.js
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
    <Card className="w-full max-w-[24rem]">
      <List className="flex-row">
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              React.js
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Vue.js
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Svelte.js
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>

    <Checkbox
      defaultChecked
      ripple={false}
      className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
    />
    </div>
  );
}

export default App;
