import React from 'react';
import { usePokemonContext } from './PokemonContext'; // Update path if necessary

interface Stage {
  name: string;
  image: string;
  description: string;
  longDescription: string[];
  time: string;
  stage: number;
  price?: number; // Make price optional
}

interface Pokemon {
  type: string;
  stages: Stage[];
}

interface EvolutionCardProps {
  pokemon: Pokemon;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ pokemon }) => {
  const { setStages } = usePokemonContext();

  const handleKnowMore = () => {
    setStages(pokemon.stages);
  };

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
          </div>
        ))}
      </div>
      <button
        onClick={handleKnowMore}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Know more
      </button>
    </div>
  );
};

export default EvolutionCard;