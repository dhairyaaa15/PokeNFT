import React, { useState } from 'react';

interface PokemonStage {
  image: string;
  name: string;
  description: string;
}

const PokemonNFTDetailsCarousel: React.FC<{ stages: PokemonStage[]; onClose: () => void }> = ({ stages, onClose }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    setCurrentStage((prevStage) => (prevStage + 1) % stages.length);
  };

  const handlePrev = () => {
    setCurrentStage((prevStage) => (prevStage - 1 + stages.length) % stages.length);
  };

  return (
    <div className="w-3/10 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{stages[currentStage].name}</h2>
        <button onClick={onClose} className="text-red-400">X</button>
      </div>

      <div className="relative">
        {/* Pokemon Image */}
        <img src={stages[currentStage].image} alt={stages[currentStage].name} className="w-full h-48 object-cover rounded-lg" />

        {/* Description */}
        <p className="mt-4 text-sm">{stages[currentStage].description}</p>

        {/* Carousel Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button onClick={handlePrev} className="bg-gray-700 p-2 rounded-lg">Previous</button>
          <button onClick={handleNext} className="bg-gray-700 p-2 rounded-lg">Next</button>
        </div>

        {/* Buy NFT Button */}
        {currentStage === stages.length - 1 && (
          <div className="mt-6 flex justify-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Buy NFT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonNFTDetailsCarousel;