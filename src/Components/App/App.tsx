import style from "./app.module.css";
import Select from "../Select/Select";
import { useState } from "react";

const options = [
  { lable: "First", value: 1 },
  { lable: "Secong", value: 2 },
  { lable: "Third", value: 3 },
  { lable: "Fourth", value: 4 },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <Select options={options} value={value} onChange={(o) => setValue(o)} />
  );
}

export default App;
