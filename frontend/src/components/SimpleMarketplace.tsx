import React from 'react';

const SimpleMarketplace: React.FC = () => {
  return (
    <div className="text-center text-white font-pixel">
      <h2 className="text-2xl font-bold mb-6 text-yellow-300">Normal Pokémon Marketplace</h2>
      <p className="text-lg">Pokémon available for trade will be listed here.</p>
      {/* Add Pokémon card components or other content here */}
    </div>
  );
};

export default SimpleMarketplace;
