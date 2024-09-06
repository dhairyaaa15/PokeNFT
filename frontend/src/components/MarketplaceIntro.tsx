import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'; // Adjust the import path according to your project structure

const MarketplaceIntro: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/main');
    }, 3000);
  };

  return (
    <>
      {loading && <Loading />}
      <motion.div
        className="w-4/5 mx-auto p-8 bg-black bg-opacity-70 text-white rounded-lg shadow-lg space-y-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <h2 className="text-3xl font-bold font-['Press_Start_2P'] text-center">
          Welcome to the PokéNFT Marketplace
        </h2>

        <p className="text-lg font-['Press_Start_2P'] text-center">
          The PokéNFT Marketplace lets you collect, trade, and evolve your favorite Pokémon-themed NFTs. Explore unique NFTs that level up and evolve as they stay with their owners.
        </p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-['Press_Start_2P']">
            Key Features
          </h3>
          <ul className="list-disc list-inside text-lg font-['Press_Start_2P']">
            <li>Evolve Pokémon-themed NFTs with time and evolution items.</li>
            <li>Trade your Pokémon NFTs with others in the marketplace.</li>
            <li>Showcase rare evolved Pokémon in your collection.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-['Press_Start_2P']">
            How It Works
          </h3>
          <p className="text-lg font-['Press_Start_2P']">
            Purchase Pokémon NFTs, and over time, they evolve to higher levels. Use evolution items like Sun Stone or Dragon Scale to trigger special evolutions. Trade evolved Pokémon with others and become a top collector.
          </p>
        </div>

        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-3 bg-green-500 text-black font-bold text-lg rounded-lg font-['Press_Start_2P']"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
          >
            Let's Goo!!
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default MarketplaceIntro;
