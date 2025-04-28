import React from "react";
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
    <div className="flex flex-col items-center justify-center">
      <Heart className="h-6 w-6 mb-2 text-pink-400" />
      <p className="text-sm">Rate My Date © {new Date().getFullYear()} – All rights reserved</p>
    </div>
  </footer>

  );
};

export default Footer;
