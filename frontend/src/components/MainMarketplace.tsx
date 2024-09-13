import React, { useState } from 'react';
import EvolvingPokemons from './EvolvingPokemons';
import SimpleMarketplace from './SimpleMarketplace';

const MainMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'evolving' | 'marketplace'>('evolving');

  return (
    <div className="mx-auto mt-9 p-5 rounded-lg bg-gray-900 text-white font-pixel shadow-lg relative">
      {/* Tabs Section */}
      <div className="flex border-b border-gray-600 mb-6">
        <div
          onClick={() => setActiveTab('evolving')}
          className={`cursor-pointer p-4 flex-1 text-center rounded-t-lg transition-transform duration-300 transform ${activeTab === 'evolving' ? 'bg-gradient-to-r from-green-600 to-green-800 text-white scale-105' : 'bg-gray-800 text-gray-400'}`}
        >
          <span className="text-lg font-semibold">Evolving Cards</span>
        </div>
        <div
          onClick={() => setActiveTab('marketplace')}
          className={`cursor-pointer p-4 flex-1 text-center rounded-t-lg transition-transform duration-300 transform ${activeTab === 'marketplace' ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white scale-105' : 'bg-gray-800 text-gray-400'}`}
        >
          <span className="text-lg font-semibold">Normal Pokémon Marketplace</span>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'evolving' ? <EvolvingPokemons /> : <SimpleMarketplace />}
    </div>
  );
};

export default MainMarketplace;
