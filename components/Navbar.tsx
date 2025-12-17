import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-xl font-bold tracking-wide">MySite</div>

      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:text-gray-600 cursor-pointer">Home</li>
        <li className="hover:text-gray-600 cursor-pointer">Projects</li>
        <li className="hover:text-gray-600 cursor-pointer">About</li>
        <li className="hover:text-gray-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
