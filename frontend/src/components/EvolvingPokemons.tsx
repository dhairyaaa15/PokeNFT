import React from 'react';
import EvolutionCard from '../components/EvolutionCard';
import pikachu from "../assets/Pikachu_nft.jpeg";
import raichu from "../assets/raichu.jpeg";
import pichu from "../assets/pichu.jpeg";
import charlizard from "../assets/charlizard.jpeg"
import charmeleon from "../assets/charmeleon.jpeg"
import charminder from "../assets/charminder.jpeg"
import squirtle from "../assets/squirtle.jpeg";
import blastroise from '../assets/blastroise.jpeg'
import wartortle from '../assets/wartortle.jpeg'

const evolvingPokemonsData = [
  {
    name: 'Electricity',
    stages: [
      { stage: 'Pichu', image: pichu, description: 'A baby electric-type Pokémon.', time: '5d' },
      { stage: 'Pikachu', image: pikachu, description: 'Known for its electric abilities.', time: '7d' },
      { stage: 'Raichu', image: raichu, description: 'Powerful electric attacks.', time: '10d' },
    ],
  },
  {
    name: 'Fire',
    stages: [
      { stage: 'Charminder', image: charminder, description: 'A baby electric-type Pokémon.', time: '5d' },
      { stage: 'Charmeleon', image: charmeleon, description: 'Known for its electric abilities.', time: '7d' },
      { stage: 'Charlizard', image: charlizard, description: 'Powerful electric attacks.', time: '10d' },
    ],
  },
  {
    name: 'Water',
    stages: [
      { stage: 'Squirtle', image: squirtle, description: 'A baby electric-type Pokémon.', time: '5d' },
      { stage: 'Wartortle', image: wartortle, description: 'Known for its electric abilities.', time: '7d' },
      { stage: 'Blastroise', image: blastroise, description: 'Powerful electric attacks.', time: '10d' },
    ],
  },
];

const EvolvingPokemons: React.FC = () => {
  return (
    <div className="flex flex-col space-x-6 py-4 overflow-y-auto max-h-[550px] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800 hover:scrollbar-thumb-green-300">
      {evolvingPokemonsData.map((pokemon, index) => (
        <EvolutionCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default EvolvingPokemons;