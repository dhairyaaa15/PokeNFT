import React from 'react';

import pikachu from "../assets/Pikachu_nft.jpeg";
import raichu from "../assets/raichu.jpeg";
import pichu from "../assets/pichu.jpeg";
import ProfileEvolCard from './ProfileEvolcard';

const electricityPokemonsData = [
  {
    type: 'Electricity',
    stages: [
      {
        name: 'Pichu',
        image: pichu,
        price: 1.04,
        description: 'A baby electric-type Pokémon.',
        longDescription: [
          'A small yellow Pokémon with big, rounded ears and a tiny tail.',
          'It has rosy cheeks that store electricity for later use.',
          'Pichu’s mischievous grin reveals its playful and curious nature.',
          'Its cute, round eyes sparkle with innocence and joy.',
        ],
        time: '⏳', // Timer symbol for Pichu
        stage: 1,
      },
      {
        name: 'Pikachu',
        image: pikachu,
        description: 'Known for its electric abilities.',
        longDescription: [
          'Pikachu has a small, chubby body with yellow fur covering it.',
          'Known for its charming smile, Pikachu can electrify opponents with ease.',
          'It runs swiftly and is quick on its feet when defending itself.',
          'A friendly Pokémon with a fierce sense of loyalty.',
        ],
        time: '7d',
        stage: 2,
      },
      {
        name: 'Raichu',
        image: raichu,
        description: 'Powerful electric attacks.',
        longDescription: [
          'Raichu has a stockier, more muscular body than its pre-evolutions.',
          'Its orange fur and long, whip-like tail charge with electricity.',
          'Large pointed ears help it sense approaching danger quickly.',
          'Its glowing cheeks light up when preparing to strike.',
        ],
        time: '10d',
        stage: 3,
      },
    ],
  },
];

const ProfileEvolvePok: React.FC = () => {
  return (
    <div 
      className="flex flex-wrap justify-center gap-6 py-4 overflow-y-auto 
                 w-[100%] max-w-5xl mx-auto 
                 max-h-[2000px] scrollbar-thin 
                 scrollbar-thumb-green-500 scrollbar-track-gray-800 
                 hover:scrollbar-thumb-green-300"
    >
      {electricityPokemonsData.map((pokemon, index) => (
        <div key={index} className="w-full max-w-xs flex flex-col items-center mb-6">
          <ProfileEvolCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};


export default ProfileEvolvePok;
