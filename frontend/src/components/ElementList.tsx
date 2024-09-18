import React, { useState } from 'react';
import { FaFire, FaWater, FaBolt, FaPlus } from 'react-icons/fa';
import ElementPopup from './ElementPopup'; // Update path if necessary

const ElementList: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const handleOpenPopup = (element: string, rate: number) => {
    setSelectedElement(`${element}:${rate}`);
  };

  const handleClosePopup = () => {
    setSelectedElement(null);
  };

  const getElementRate = (element: string) => {
    switch (element) {
      case 'Fire':
        return 0.00021;
      case 'Water':
        return 0.00015;
      case 'Electricity':
        return 0.00032;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 text-white p-2 rounded-lg flex flex-col space-y-2 justify-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaFire className="text-red-500 text-2xl" />
          <span className="text-xl font-pixel">Fire</span>
        </div>
        <button
          onClick={() => handleOpenPopup('Fire', getElementRate('Fire'))}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <FaPlus className="text-white text-sm" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaWater className="text-blue-500 text-2xl" />
          <span className="text-xl font-pixel">Water</span>
        </div>
        <button
          onClick={() => handleOpenPopup('Water', getElementRate('Water'))}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <FaPlus className="text-white text-sm" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBolt className="text-yellow-400 text-xl" />
          <span className="text-xl font-pixel">Electricity</span>
        </div>
        <button
          onClick={() => handleOpenPopup('Electricity', getElementRate('Electricity'))}
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <FaPlus className="text-white text-sm" />
        </button>
      </div>

      {/* Render Popup */}
      {selectedElement && (
        <ElementPopup
          element={selectedElement.split(':')[0] as 'Fire' | 'Water' | 'Electricity'}
          rate={Number(selectedElement.split(':')[1])}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ElementList;
