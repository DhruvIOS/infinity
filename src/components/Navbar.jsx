import React from "react";
import logo from "../assets/logo2.png"; // Ensure path is correct

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold text-pink-600">Rate My Date</h1>
        <img
          src={logo}
          alt="Rate My Date Logo"
          className="h-20 w-auto object-contain"
        />
      </div>
      <button
        onClick={onLoginClick}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
