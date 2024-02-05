import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import './App.css';

function App() {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(10);
  const { name, flags, countryCallingCode } = countries[country];
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="flex gap-4 p-5">
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
     <div className="relative flex w-full max-w-[24rem]">
     <Input
       type="email"
       label="Email Address"
       value={email}
       onChange={onChange}
       className="pr-20"
       containerProps={{
         className: "min-w-0",
       }}
     />
     <Button
       size="sm"
       color={email ? "gray" : "blue-gray"}
       disabled={!email}
       className="!absolute right-1 top-1 rounded"
     >
       Invite
     </Button>
   </div>
   <div className="w-72">
      <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
    </div>
    <div className="w-72">
      <Input label="Search here" icon={<i class="fa-solid fa-magnifying-glass"></i>} />
    </div>
    <div className="w-72">
      <Input label="Username" />
    </div>
   </div>
  )
}

export default App;
