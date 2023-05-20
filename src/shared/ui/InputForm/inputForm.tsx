import { FC } from "react";

import cls from "./inputForm.module.scss"

interface IInputForm {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: FC<IInputForm> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={cls.inputNumber}
      value={value}
      onChange={onChange}
    />
  );
};

