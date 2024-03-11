import { useEffect, useState, MouseEvent } from "react";
import style from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string | number;
};

interface SelectionProps {
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
  options: SelectOptions[];
}

export default function Select({
  value,
  onChange,
  options,
}: SelectionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mouseEnterElem, setMouseEnterElem] = useState<number | undefined>();

  function clearOptions(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    onChange(undefined);
  }

  function selectOptions(option: SelectOptions): void {
    if (option === value) return;
    onChange(option);
  }

  useEffect(() => {
    setMouseEnterElem(undefined);
  }, [isOpen]);

  return (
    <div
      onBlur={() => {
        setIsOpen(false);
      }}
      onClick={() => setIsOpen((state) => !state)}
      tabIndex={0}
      className={style.container}
    >
      <span className={style.value}>{value?.label}</span>
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          clearOptions(e);
        }}
        className={style.clearBtn}
      >
        &times;
      </button>
      <div className={style.divider}></div>
      <div className={style.caret}></div>
      <ul className={`${style.options} ${isOpen && style.show}`}>
        {options.map((option, index) => (
          <li
            onMouseEnter={() => setMouseEnterElem(index)}
            onClick={(e: MouseEvent<HTMLLIElement>) => {
              e.stopPropagation();
              selectOptions(option);
              setIsOpen(false);
            }}
            key={option.label}
            className={`${style.option} ${
              value === option ? style.selected : ""
            } ${mouseEnterElem === index ? style.highlighted : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
