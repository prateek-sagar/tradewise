import React from "react";
import Button from "@/atoms/button";
import Input from "@/atoms/input";

// when user login and when not
// so the option changes
export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-10 text-white">
      <div className="text-xl font-bold">TradeWise</div>
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Button className="font-bold text-[14x]">Features</Button>
          </li>
          <li>
            <Button className="font-bold text-[14px]">Pricing</Button>
          </li>
          <li>
            <Button className="font-bold text-[14px]">Resources</Button>
          </li>
          <li>
            <Button className="bg-highlight text-darkly text-[14px] font-bold">
              Get Started
            </Button>
          </li>
          <li>
            <Button className="bg-greenix font-bold min-w-[80px] text-[14px]">
              Log in
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
