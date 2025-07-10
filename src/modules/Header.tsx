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
            <Button className="tracking-widest text-sm">Features</Button>
          </li>
          <li>
            <Button className="tracking-widest text-sm">Pricing</Button>
          </li>
          <li>
            <Button className="tracking-widest text-sm">Resources</Button>
          </li>
          <li>
            <Button className="bg-highlight text-darkly text-sm  tracking-widest">
              Get Started
            </Button>
          </li>
          <li>
            <Button className="bg-less-highlight  min-w-[80px] tracking-widest text-sm">
              Log in
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
