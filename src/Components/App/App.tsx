import Select, { SelectOptions } from "../Select/Select";
import { useState } from "react";
import styles from "./app.module.css";

const options = [
  { lable: "First", value: 1 },
  { lable: "Secong", value: 2 },
  { lable: "Third", value: 3 },
  { lable: "Fourth", value: 4 },
  { lable: "Fifth", value: 5 },
  { lable: "Sixth", value: 6 },
  { lable: "Seventh", value: 7 },
];

function App() {
  const [multipleValue, setMultipleValue] = useState<SelectOptions[]>([
    options[0],
  ]);
  const [singleValue, setSingleValue] = useState<SelectOptions | undefined>(
    options[0]
  );

  return (
    <div className={styles.app}>
      <Select
        multiple={true}
        options={options}
        value={multipleValue}
        onChange={(elem) => setMultipleValue(elem)}
      />
      <br />
      <Select
        options={options}
        value={singleValue}
        onChange={(elem) => setSingleValue(elem)}
      />
    </div>
  );
}

export default App;
