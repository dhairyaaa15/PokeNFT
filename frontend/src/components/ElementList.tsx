import React from 'react';
import { FaFire, FaWater, FaBolt, FaPlus } from 'react-icons/fa'; // Example icons

const ElementList: React.FC = () => {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-2 rounded-lg flex flex-col space-y-2 justify-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaFire className="text-red-500 text-2xl" /> {/* Adjusted size */}
          <span className="text-xl font-pixel">Fire</span> {/* Adjusted text size */}
        </div>
        <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
          <FaPlus className="text-white text-lg" /> {/* Adjusted size */}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaWater className="text-blue-500 text-2xl" /> {/* Adjusted size */}
          <span className="text-xl font-pixel">Water</span> {/* Adjusted text size */}
        </div>
        <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
          <FaPlus className="text-white text-lg" /> {/* Adjusted size */}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBolt className="text-yellow-400 text-xl" /> {/* Adjusted size */}
          <span className="text-xl font-pixel">Electricity</span> {/* Adjusted text size */}
        </div>
        <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
          <FaPlus className="text-white text-lg" /> {/* Adjusted size */}
        </button>
      </div>
    </div>
  );
};

export default ElementList;
