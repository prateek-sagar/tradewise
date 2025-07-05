import React from "react";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  placeholder?: string;
  type?: string;
}

export default function Input({
  onChange,
  value = "",
  className = "",
  placeholder = "",
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`rounded-[12px] px-1.5 py-0.5 ${className}`}
      placeholder={placeholder}
      autoComplete="off"
      autoCorrect="off"
    />
  );
}
