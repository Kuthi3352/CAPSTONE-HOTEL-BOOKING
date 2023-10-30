/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

//rafc
type InputProps = {
  label?: string;
  id?: string;
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegister<any>;
  error?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string | number;
  onChange?: any;
  min?: string;
  max?: string;
  disabled?: boolean;
};

export const Input = ({
  label,
  id = "0",
  register,
  type = "text",
  error,
  placeholder,
  className = "",
  name,
  onChange,
  value,
  disabled,
}: InputProps) => {
  return (
    <div className={className}>
      {!!label && (
        <label className="text-black" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        disabled={disabled}
        className="p-10 mt-8 w-full text-black rounded-6 bg-[#d1d0d0]"
        {...register?.(name)}
        value={value}
      />
      {!!error && <p className="text-red-500 text-14">{error}</p>}
    </div>
  );
};
