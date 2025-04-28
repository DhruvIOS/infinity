import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


const Matches = () => {
  const location = useLocation();
  const matchedProfiles = location.state?.matchedProfiles || [];
  const navigate = useNavigate();

  console.log("Matched in pages (via location.state):", matchedProfiles);
  const handleLogoutClick = () => {
    navigate("/"); // Navigate to /login when the button is clicked
  };
  return (
    <div>
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">Rate My Date</h1>
      <button
        onClick={handleLogoutClick}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </nav>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Matched Profiles</h2>

      {matchedProfiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedProfiles.map((profile, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">{profile.name[0]}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.age} years old</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">Gender: {profile.gender}</p>
              <p className="text-sm text-gray-600">Race: {profile.race}</p>
              <p className="text-sm text-gray-600">Height: {profile.height}</p>
              <p className="text-sm text-gray-600">Eye Color: {profile.eyeColor}</p>
              <p className="text-sm text-gray-600">Looking for: {profile.lookingFor}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Hobbies</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {profile.hobbies.map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">No matches found</p>
      )}
    </div>
      <Footer />
  </div>
  );
};

export default Matches;
