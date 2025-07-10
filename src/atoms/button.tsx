import React from "react";

interface ButtonProps {
  onclick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  onclick,
  children,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={
        `rounded-[8px] squircle px-3 flex items-center h-8 justify-center cursor-pointer` +
        " " +
        className
      }
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
