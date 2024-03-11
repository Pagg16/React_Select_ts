import style from "./app.module.css";
import Select from "../Select/Select";

const options = [
  { lable: "First", value: 1 },
  { lable: "Secong", value: 2 },
  { lable: "Third", value: 3 },
  { lable: "Fourth", value: 4 },
];

function App() {
  return <Select options={options} />;
}

export default App;
