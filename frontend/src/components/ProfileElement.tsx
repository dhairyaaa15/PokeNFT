import React from 'react';
import { FaFire, FaWater, FaBolt } from 'react-icons/fa';

const ProfileElement: React.FC = () => {
  // Static counts for each element, adjust them as needed
  const fireCount = 5;
  const waterCount = 3;
  const electricityCount = 7;

  return (
    <div className="bg-gray-800 bg-opacity-80 text-white p-2 rounded-lg flex flex-col space-y-2 justify-center">
      {/* Fire Element */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaFire className="text-red-500 text-2xl" />
          <span className="text-xl font-pixel">Fire</span>
        </div>
        <div className="text-xl font-pixel bg-green-500 p-2 rounded-full">
          {fireCount}
        </div>
      </div>

      {/* Water Element */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaWater className="text-blue-500 text-2xl" />
          <span className="text-xl font-pixel">Water</span>
        </div>
        <div className="text-xl font-pixel bg-green-500 p-2 rounded-full">
          {waterCount}
        </div>
      </div>

      {/* Electricity Element */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBolt className="text-yellow-400 text-xl" />
          <span className="text-xl font-pixel">Electricity</span>
        </div>
        <div className="text-xl font-pixel bg-green-500 p-2 rounded-full">
          {electricityCount}
        </div>
      </div>
    </div>
  );
};

export default ProfileElement;
