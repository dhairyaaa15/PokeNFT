import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/Main')}
      className="relative w-full mx-auto mt-6 flex justify-center items-center p-4 rounded-full border-4 border-gray-800 bg-gradient-to-r from-green-800 via-gray-900 to-black shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Logo Section - Centered */}
      <h1 className="text-3xl text-gray-100 font-pixel tracking-wide hover:text-green-300 transition-colors duration-300">
        PokéNFT
      </h1>

      {/* Glow effect behind the Navbar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-transparent to-blue-500 opacity-20 blur-2xl pointer-events-none" />
    </div>
  );
};

export default ProfileNav;
