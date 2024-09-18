import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Mail Section */}
          <div className="flex-1 text-center md:text-left">
            <a 
              href="mailto:dhairyachawda5@gmail.com" 
              className="text-lg font-pixel hover:text-green-300 transition-colors"
            >
              Mail
            </a>
          </div>

          {/* Copyright Section */}
          <div className="flex-1 text-center">
            <p className="text-sm font-pixel">
              &copy; {new Date().getFullYear()} PokéNFT. All rights reserved.
            </p>
          </div>

          {/* Twitter Section */}
          <div className="flex-1 text-center md:text-right">
            <a 
              href="https://x.com/dhairya_15_" 
              className="text-xl font-pixel hover:text-green-300 transition-colors" 
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
