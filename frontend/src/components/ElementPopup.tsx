import React, { useState } from 'react';
import { FaFire, FaWater, FaBolt, FaTimes } from 'react-icons/fa';

interface ElementPopupProps {
  element: 'Fire' | 'Water' | 'Electricity';
  rate: number;
  onClose: () => void;
}

const ElementPopup: React.FC<ElementPopupProps> = ({ element, rate, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const totalAmount = (quantity * rate).toFixed(5);

  const renderIcon = () => {
    switch (element) {
      case 'Fire':
        return <FaFire className="text-red-500 text-4xl" />;
      case 'Water':
        return <FaWater className="text-blue-500 text-4xl" />;
      case 'Electricity':
        return <FaBolt className="text-yellow-400 text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="flex items-center justify-center mb-4">
          {renderIcon()}
          <h2 className="text-2xl font-pixel ml-3 text-green-300">
            Buy {element}
          </h2>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-white text-lg font-pixel mb-2">Rate: {rate} Apt</p>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="p-2 w-20 rounded-lg border border-gray-600 bg-gray-700 text-white text-center"
            />
            <span className="text-white font-pixel">Quantity</span>
          </div>
          <p className="text-white text-lg font-pixel mb-2">Total Amount: {totalAmount} Apt</p>
        </div>
        <button className="w-full py-2 bg-green-600 text-white rounded-lg font-pixel font-bold hover:bg-green-500 transition">
          Buy Them
        </button>
      </div>
    </div>
  );
};

export default ElementPopup;
