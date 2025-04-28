import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";
import PreferenceForm from "../components/PreferenceForm";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // Use navigate hook

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login when the button is clicked
  };

  const handleFormSubmit = (formData) => {
    navigate("/matches", { state: formData }); // After form submission, navigate to /matches
  };

  return (
    <main className="bg-white text-gray-800">
      <Navbar onLoginClick={handleLoginClick} />

      <section className="bg-gradient-to-br from-pink-100 via-white to-blue-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-pink-600">Rate My Date</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            The only platform where your date experience actually counts.
            Review, connect, and date with real accountability.
          </p>
          {!showForm && (
            <Button onClick={handleLoginClick} className="bg-pink-600 text-white px-6 py-3 text-lg rounded-xl">
              Get Started
            </Button>
          )}
        </div>
      </section>

      {showForm && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-xl mx-auto">
            <PreferenceForm onSubmit={handleFormSubmit} />
          </div>
        </section>
      )}

      <WhatMakesUsDifferent />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default LandingPage;
