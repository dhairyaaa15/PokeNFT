import React from 'react';
import { Pokemon } from './EvolutionCard'; // Update path if necessary

interface ProfileEvolCardProps {
  pokemon: Pokemon;
}

const ProfileEvolCard: React.FC<ProfileEvolCardProps> = ({ pokemon }) => {
  return (
    <div className="p-2 bg-gray-800 bg-opacity-80 mt-4 ml-5 rounded-lg border border-gray-600 shadow-lg text-white font-pixel justify-center flex-shrink-0 mx-3 min-w-72 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-green-300">{pokemon.type}</h2>
      <div className="flex space-x-4 overflow-x-auto w-full">
        {pokemon.stages.map((stage, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg text-center w-60 flex-shrink-0">
            <img src={stage.image} alt={stage.name} className="w-36 h-36 object-cover mb-3 rounded-sm mx-auto" />
            <h3 className="text-xl font-bold mb-1 text-blue-300">{stage.name}</h3>
            <p className="text-sm mb-2">{stage.description}</p>
            <p className="text-md text-gray-400">Time Required: {stage.time}</p>

            {/* Claim button for each stage */}
            <button
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Claim
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileEvolCard;
