import React from "react";
import Button from "@/atoms/button";
import Input from "@/atoms/input";

// when user login and when not
// so the option changes
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">TradeWise</div>
      <div className="flex space-x-4">
        <ul>
          <li>
            <Button>Features</Button>
          </li>
          <li>
            <Button>Pricing</Button>
          </li>
          <li>
            <Button>Resources</Button>
          </li>
          <li>
            <Button>Get Started</Button>
          </li>
          <li>
            <Button>Log in</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
