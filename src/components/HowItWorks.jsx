// components/HowItWorks.jsx
import React from 'react';
import { Heart, Calendar, CheckCircle, MessageSquare, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <Heart className="h-8 w-8 text-pink-600" />,
    title: "Match",
    description: "Find someone based on what matters most to you.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-pink-600" />,
    title: "Go On The Date",
    description: "Meet up and enjoy the experience—online or in person.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-pink-600" />,
    title: "Confirm Date",
    description: "Let us know the date happened to unlock review options.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-pink-600" />,
    title: "Leave Feedback",
    description: "Rate and review the experience to help others.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-pink-600" />,
    title: "Smarter Matches",
    description: "Your insights improve everyone’s future connections.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
