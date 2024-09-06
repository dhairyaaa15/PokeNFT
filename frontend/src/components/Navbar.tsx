import React from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const Navbar: React.FC = () => {
  return (
    <div className="w-3/5 mx-auto mt-6 flex justify-between items-center bg-dark-green bg-opacity-90 p-4 rounded-full border-4 border-gray-800">
      <div className="flex flex-row items-center space-x-4">
        <h1 className="text-gray-100 text-3xl font-pixel">PokéNFT</h1>
      </div>
      
      <div className="flex flex-row items-center space-x-4">
        <WalletSelector />
      </div>
    </div>
  );
};

export default Navbar;
