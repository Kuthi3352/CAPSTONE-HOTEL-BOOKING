/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

//rafc
type TextareaProps = {
  rows?: number;
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
};

export const Textarea = ({
  rows,
  id = "0",
  register,

  error,
  placeholder,
  className = "",
  name,
  onChange,
  value,
}: TextareaProps) => {
  return (
    <div className={className}>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        className="w-full h-[233px] p-10 text-[18px] !focus-visible:bg-none"
        {...register?.(name)}
        value={value}
      />
      {!!error && <p className="text-red-500 text-14">{error}</p>}
    </div>
  );
};
