import React from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const Navbar: React.FC = () => {



  return (
    <div className="relative w-3/5 mx-auto mt-6 flex justify-between items-center p-4 rounded-full border-4 border-gray-800 bg-gradient-to-r from-green-800 via-gray-900 to-black shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl text-gray-100 font-pixel tracking-wide hover:text-green-300 transition-colors duration-300">
          PokéNFT
        </h1>
      </div>

      {/* Wallet Selector */}
      <div className="flex items-center space-x-4">
        <WalletSelector/>
      </div>

      {/* Glow effect behind the Navbar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-transparent to-blue-500 opacity-20 blur-2xl pointer-events-none" />
    </div>
  );
};

export default Navbar;
