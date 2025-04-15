import React from 'react';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import HowItWorks from './components/HowItWorks';
import Button from "./components/ui/Button.jsx";
import { Heart } from 'lucide-react';

const LandingPage = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-white to-blue-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-pink-600">Rate My Date</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            The only platform where your date experience actually counts.
            Review, connect, and date with real accountability.
          </p>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg rounded-xl shadow-md">
            Get Started
          </Button>
        </div>
      </section>

      {/* What Makes Us Different */}
      <WhatMakesUsDifferent />

      {/* How It Works */}
      <HowItWorks />

      {/* Call to Action */}
      <section className="bg-pink-600 text-white py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to make dating honest again?</h2>
          <p className="mb-6 text-lg">
            Join our community of verified users today and start rating your dates.
          </p>
          <Button className="bg-white font-semibold hover:bg-gray-100 px-6 py-3 text-lg rounded-xl">
            Join Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <div className="flex flex-col items-center justify-center">
          <Heart className="h-6 w-6 mb-2 text-pink-400" />
          <p className="text-sm">Rate My Date © {new Date().getFullYear()} – All rights reserved</p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
