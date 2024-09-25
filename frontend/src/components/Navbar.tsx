import React from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { connected, disconnect } = useWallet();
  const navigate = useNavigate();

  return (
    <div className="relative w-3/5 mx-auto mt-6 flex justify-between items-center p-4 rounded-full border-4 border-gray-800 bg-gradient-to-r from-green-800 via-gray-900 to-black shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl text-gray-100 font-pixel tracking-wide hover:text-green-300 transition-colors duration-300">
          PokéNFT
        </h1>
      </div>

      {/* Wallet Selector or Profile and Disconnect */}
      <div className="flex items-center space-x-4">
        {connected ? (
          <>
            {/* My Profile Button */}
            <button 
              onClick={() => navigate('/Myprofile')}
              className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all duration-300 font-pixel text-sm tracking-wide shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            >
              My Profile
            </button>

            {/* Disconnect Button */}
            <button 
              onClick={disconnect}
              className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-300 font-pixel text-sm tracking-wide shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400"
            >
              Disconnect
            </button>
          </>
        ) : (
          <WalletSelector />
        )}
      </div>

      {/* Glow effect behind the Navbar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-transparent to-blue-500 opacity-20 blur-2xl pointer-events-none" />
    </div>
  );
};

export default Navbar;
