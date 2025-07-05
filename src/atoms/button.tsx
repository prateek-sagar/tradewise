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
    <button className={`rounded-full px-1.5 py-0.5`} onClick={onclick}>
      {children}
    </button>
  );
}
