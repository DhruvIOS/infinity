import React from "react";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">Rate My Date</h1>
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
