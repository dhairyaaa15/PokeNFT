import React, { useState } from 'react';
import { usePokemonContext } from './PokemonContext'; // Update path if necessary

const NftCarousel: React.FC = () => {
  const { stages } = usePokemonContext();
  const [currentStage, setCurrentStage] = useState(0);

  if (!stages || stages.length === 0) {
    return (
    <div className="p-6 bg-gray-800 rounded-lg h-[800px] flex flex-col items-center justify-center text-white shadow-lg border-2 border-green-500">
      <h2 className="text-3xl font-pixel mb-6 text-green-300 text-center">
        Pokémon Carousel
      </h2>
      <p className="text-center mb-4 font-pixel text-xl leading-relaxed">
        It is always better to know your Pokémon before taking a step to buy them.
      </p>
      <p className="text-center font-pixel text-xl leading-relaxed">
        Choose a Pokémon and click on the <span className="text-yellow-400">"Know More"</span> button to get the details of that respective Pokémon, stage-wise.
      </p>
    </div>
  );
  }

  const handlePrevious = () => {
    setCurrentStage((prevStage) => (prevStage > 0 ? prevStage - 1 : stages.length - 1));
  };

  const handleNext = () => {
    setCurrentStage((prevStage) => (prevStage < stages.length - 1 ? prevStage + 1 : 0));
  };

  const stage = stages[currentStage];

  return (
    <div className="p-2 bg-gray-800 bg-opacity-80 rounded-lg h-[800px] flex flex-col items-center">
      {/* Stage Indicator */}
      <h2 className="text-2xl font-pixel mb-3 text-green-300 text-center">
        Stage {stage.stage}
      </h2>

      {/* Image Section */}
      <div className="w-56 h-56 bg-gray-900 mb-9 flex items-center justify-center relative overflow-hidden rounded-md">
        <img
          src={stage.image}
          alt={`Stage ${stage.stage}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Short Description */}
      <h3 className="text-lg font-pixel font-semibold text-white mb-1.5 text-center">{stage.name}</h3>

      {/* Long Description */}
      <div className="p-4 rounded-lg mb-4">
        <h4 className="text-md font-pixel font-semibold text-green-300 mb-2 text-center">Detailed Description</h4>
        <ul className="list-disc list-inside text-gray-300 font-pixel text-sm">
          {stage.longDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-2 w-full px-1">
        <button
          onClick={handlePrevious}
          disabled={currentStage === 0}
          className={`w-2.5/5 py-2 ${currentStage === 0 ? 'bg-blue-950 cursor-not-allowed' : 'bg-blue-950 hover:bg-gray-900'} font-pixel text-white rounded-lg transition`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStage === stages.length - 1}
          className={`w-2/5 py-2 ${currentStage === stages.length - 1 ? 'bg-blue-950 cursor-not-allowed' : 'bg-blue-950 hover:bg-gray-900'} font-pixel text-white rounded-lg transition`}
        >
          Next
        </button>
      </div>

      {/* Buy Button */}
      <button
        className="w-full py-2 bg-green-600 text-white rounded-lg font-pixel font-bold hover:bg-green-500 transition"
      >
        BUY NFT
      </button>
    </div>
  );
};

export default NftCarousel;
