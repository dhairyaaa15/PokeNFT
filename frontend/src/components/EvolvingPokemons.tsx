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
        time: '5d',
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
  {
    type: 'Fire',
    
    stages: [
      {
        name: 'Charmander',
        image: charminder,
        price: 0.77,
        description: 'A baby fire-type Pokémon.',
        longDescription: [
          'Charmander is a small lizard-like Pokémon with an orange body and fiery tail.',
          'Its love for heat makes it enjoy basking in the sun for hours.',
          'Often found wandering in caves, it has a friendly disposition.',
          'Despite its small size, Charmander has a brave heart.',
        ],
        time: '5d',
        stage: 1,
      },
      {
        name: 'Charmeleon',
        image: charmeleon,
        description: 'Known for its fiery attitude.',
        longDescription: [
          'Charmeleon has a more aggressive stance, with its sharper claws and horns.',
          'Its fiery tail has grown longer and burns hotter with every battle.',
          'Its orange scales shimmer when it’s angry or preparing for battle.',
          'When threatened, Charmeleon will attack fiercely to defend itself.',
        ],
        time: '7d',
        stage: 2,
      },
      {
        name: 'Charizard',
        image: charlizard,
        description: 'Powerful fire attacks.',
        longDescription: [
          'Charizard towers over its previous forms, with large wings for flying.',
          'Its orange scales glisten in sunlight, and its powerful tail burns fiercely.',
          'It often flies high to challenge stronger foes and showcase its strength.',
          'A majestic Pokémon that commands respect wherever it goes.',
        ],
        time: '10d',
        stage: 3,
      },
    ],
  },
  {
    type: 'Water',
    
    stages: [
      {
        name: 'Squirtle',
        image: squirtle,
        price: 1.09,
        description: 'A baby water-type Pokémon.',
        longDescription: [
          'Squirtle is a small, blue turtle with a rounded shell that protects it.',
          'Squirtle’s tiny legs and arms make it quick and agile in water.',
          'Known for its water attacks, it can retreat into its shell to avoid damage.',
          'Its shell is tough but lightweight, perfect for swimming.',
        ],
        time: '5d',
        stage: 1,
      },
      {
        name: 'Wartortle',
        image: wartortle,
        description: 'Known for its defensive power.',
        longDescription: [
          'Wartortle has a larger, more defined shell and a bushy tail that grows longer.',
          'Wartortle’s ears are large and sensitive, detecting danger from afar.',
          'It can launch high-pressure water streams from its mouth with ease.',
          'Its tail is a symbol of its experience and strength in battles.',
        ],
        time: '7d',
        stage: 2,
      },
      {
        name: 'Blastoise',
        image: blastroise,
        description: 'Powerful water attacks.',
        longDescription: [
          'Blastoise is a massive, turtle-like Pokémon with two water cannons on its back.',
          'Its calm demeanor hides its immense strength and tactical mind in battle.',
          'Blastoise is a powerhouse in water, using its cannons to propel itself.',
          'Its powerful stance and unbreakable defenses make it a formidable opponent.',
        ],
        time: '10d',
        stage: 3,
      },
    ],
  },
];

const EvolvingPokemons: React.FC = () => {
  return (
    <div className="flex flex-col space-x-6 py-4 overflow-y-auto max-h-[780px] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800 hover:scrollbar-thumb-green-300">
      {evolvingPokemonsData.map((pokemon, index) => (
        <EvolutionCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default EvolvingPokemons;