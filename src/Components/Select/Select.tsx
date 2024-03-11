import style from "./select.module.css";

type SelectOptions = {
  lable: string;
  value: string | number;
};

interface SelectionProps {
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
  options: SelectOptions[];
}

export default function Select({ value, onChange, options }: SelectionProps) {
  return (
    <div tabIndex={0} className={style.container}>
      <span className={style.value}>Value</span>
      <button className={style.clesrBtn}>&times;</button>
      <div className={style.divider}></div>
      <div className={style.caret}></div>
      <ul className={style.option}>
        {options.map((option) => (
          <li key={option.lable} className={style.potion}>
            {option.lable}
          </li>
        ))}
      </ul>
    </div>
  );
}
