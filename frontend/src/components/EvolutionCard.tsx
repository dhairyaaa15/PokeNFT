import React from 'react';

interface Stage {
  stage: string;
  image: string;
  description: string;
  time: string;
}

interface Pokemon {
  name: string;
  stages: Stage[];
}

interface EvolutionCardProps {
  pokemon: Pokemon;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ pokemon }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-lg text-white font-pixel flex-shrink-0 mx-2 min-w-72 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-green-300">{pokemon.name}</h2>
      <div className="flex space-x-4 overflow-x-auto w-full">
        {pokemon.stages.map((stage, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg text-center w-60 flex-shrink-0">
            <img src={stage.image} alt={stage.stage} className="w-32 h-32 object-cover mb-3 rounded-full mx-auto" />
            <h3 className="text-xl font-bold mb-1 text-blue-300">{stage.stage}</h3>
            <p className="text-sm mb-2">{stage.description}</p>
            <p className="text-xs text-gray-400">Time Required: {stage.time}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Know more
      </button>
    </div>
  );
};

export default EvolutionCard;
