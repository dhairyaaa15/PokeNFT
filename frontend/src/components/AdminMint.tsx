import { useState } from 'react';

const AdminMint = () => {
  const [mintSuccess, setMintSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate minting process
    setTimeout(() => {
      setMintSuccess(true);
    }, 2000); // Simulate 2-second delay for minting
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 font-pixel">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Mint a New Pokémon NFT</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pokémon Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Pokémon Name:</label>
            <input
              type="text"
              placeholder="Enter Pokémon name"
              className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-300 font-semibold">Image Upload:</label>
            <select className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
              <option value="asset1">Choose from existing assets</option>
              <option value="asset2">Pokémon Image 1</option>
              <option value="asset3">Pokémon Image 2</option>
            </select>
          </div>

          {/* Pokémon Type */}
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-300 font-semibold">Pokémon Type:</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center text-red-500">
                <input type="radio" name="type" value="Fire" className="form-radio text-red-500" />
                <span className="ml-2">Fire</span>
              </label>
              <label className="inline-flex items-center text-blue-500">
                <input type="radio" name="type" value="Water" className="form-radio text-blue-500" />
                <span className="ml-2">Water</span>
              </label>
              <label className="inline-flex items-center text-slate-500">
                <input type="radio" name="type" value="Electricity" className="form-radio text-yellow-500" />
                <span className="ml-2">Electricity</span>
              </label>
            </div>
          </div>

          {/* Evolution Stage */}
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-300 font-semibold">Evolution Stage:</label>
            <select className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
              <option value="1">Stage 1</option>
              <option value="2">Stage 2</option>
              <option value="3">Stage 3</option>
            </select>
          </div>

          {/* Mint Button */}
          <button
            type="submit"
            className="w-full p-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-gray-900 font-semibold"
          >
            Mint NFT
          </button>
        </form>

        {/* Mint Success Message */}
        {mintSuccess && (
          <div className="mt-6 text-center text-green-400 font-semibold">
            Pokémon NFT minted successfully!
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminMint;