import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
 
export default function App() {
  const { countries } = useCountries();
  const [value, setValue] = React.useState("react");

  return (
    <div className="grid grid-cols-2 mx-auto mt-10 w-10/12">
    <div className="w-72">
      <Select
        size="lg"
        label="Select Country"
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
      >
        {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
            {name}
          </Option>
        ))}
      </Select>
    </div>
    <div className="w-72">
      <Select
        label="Select Version"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Material Tailwind HTML</Option>
        <Option value="react">Material Tailwind React</Option>
        <Option value="vue">Material Tailwind Vue</Option>
        <Option value="angular">Material Tailwind Angular</Option>
        <Option value="svelte">Material Tailwind Svelte</Option>
      </Select>
    </div>
    </div>
  );
}