import React from 'react';
import Navbar from '../components/Navbar';
import Welimg from '../assets/bgimg.jpeg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-auto bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${Welimg})` }} // Set the background image
    >
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-pixel mb-4 animate-fade-in text-gray-800"
          style={{
            textShadow: '0 4px 8px rgba(0, 0, 255, 0.5)' // Inline style for blue shadow
          }}
        >Welcome to PokéNFT</h1>
        <p
          className="text-2xl mb-6 font-pixel animate-fade-in text-white/90"
          style={{
            textShadow: '0 4px 8px rgba(0, 0, 255, 0.6)' // Inline style for blue shadow
          }}
        >
          Collect, evolve, and trade your Pokémon NFTs. <br />
          Watch your collection grow to new heights. <br />
          Join the ultimate NFT experience today!
        </p>
        <button
          className="px-6 py-3 text-lg font-bold text-white rounded-3xl border-2 border-black bg-gradient-to-b from-yellow-400 to-orange-600 shadow-md hover:shadow-lg transition-colors font-pixel animate-fade-in"
          onClick={() => navigate('/explore')}
        >
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Home;
