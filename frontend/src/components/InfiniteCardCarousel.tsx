import React from 'react';
import charlizard from '../assets/charlizard.jpeg';
import pikachu from '../assets/Pikachu_nft.jpeg';
import charmeleon from '../assets/charmeleon.jpeg';
import gengar from '../assets/gengar.jpeg';
import mewtow from '../assets/mewtwo.jpeg';
import nighttangles from '../assets/ninetales.jpeg';
import amaura from '../assets/amaura.jpeg';
import bayleef from '../assets/bayleef.jpeg';

const images = [
  charlizard,
  pikachu,
  charmeleon,
  gengar,
  mewtow,
  nighttangles,
  amaura,
  bayleef,
];

const InfiniteCardCarousel: React.FC = () => {
  return (
    <div className="overflow-hidden w-full h-48">
      <div className="flex animate-scroll">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="w-48 h-40 flex-shrink-0 bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-2"
          >
            <img
              src={src}
              alt={`Card ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCardCarousel;
