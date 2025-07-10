import { Children } from "react";

interface CardProps {
  className: string;
  children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={
        `rounded-[12px] squircle border border-less-highlight` + " " + className
      }
    >
      {children}
    </div>
  );
}
