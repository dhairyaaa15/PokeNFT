import React from 'react';
import EvolutionCard from '../components/EvolutionCard';
import pichu from "../assets/Pikachu_nft.jpeg";

const evolvingPokemonsData = [
  {
    name: 'Electricity',
    stages: [
      { stage: 'Stage 1', image: pichu, description: 'A baby electric-type Pokémon.', time: '2d' },
      { stage: 'Stage 2', image: pichu, description: 'Known for its electric abilities.', time: '3d' },
      { stage: 'Stage 3', image: pichu, description: 'Unleashes powerful electric attacks.', time: '4d' },
    ],
  },
  // Add more Pokémon data here
];

const EvolvingPokemons: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 py-4 ">
      {evolvingPokemonsData.map((pokemon, index) => (
        <EvolutionCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default EvolvingPokemons;
