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
  value?: string;
  onChange?: any;
};

export const Input = ({
  label,
  id,
  register,
  type = "text",
  error,
  placeholder,
  className = "",
  name,
  onChange,
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
        className="p-10 mt-8 w-full text-black rounded-6 bg-[#d1d0d0]"
        {...register?.(name)}
      />
      {!!error && <p className="text-red-500 text-14">{error}</p>}
    </div>
  );
};
