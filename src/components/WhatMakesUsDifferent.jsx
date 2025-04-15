// components/WhatMakesUsDifferent.jsx
import React from 'react';
import { ShieldCheck, Users, EyeOff, Star } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Verified Profiles Only",
    description: "We ensure everyone is who they say they are—no fake accounts.",
  },
  {
    icon: <EyeOff className="h-8 w-8 text-blue-600" />,
    title: "Private Reviews",
    description: "You control who sees your feedback—privacy comes first.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Mutual Match Reviews",
    description: "Only matched users can leave or view reviews to ensure fairness.",
  },
  {
    icon: <Star className="h-8 w-8 text-blue-600" />,
    title: "Community-Driven Ratings",
    description: "Ratings come from real people after real dates.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Makes Us Different
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
