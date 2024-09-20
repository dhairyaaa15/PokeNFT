import { useState, useEffect } from 'react';

const AdminMint = () => {
  const [mintSuccess, setMintSuccess] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('asset1');
  const [pokemonType, setPokemonType] = useState('');
  const [evolutionStage, setEvolutionStage] = useState('1');

  // Define the correct admin password (hardcoded for now)
  const correctPassword = 'admin123';

  // Handle success message fade away after a few seconds
  useEffect(() => {
    if (mintSuccess) {
      const timer = setTimeout(() => {
        setMintSuccess(false); // Hide success message after 3 seconds
      }, 3000);

      // Cleanup timer when component unmounts or when mintSuccess changes
      return () => clearTimeout(timer);
    }
  }, [mintSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered password matches the correct admin password
    if (adminPassword === correctPassword) {
      setPasswordError(false); // Clear any previous password error

      // Simulate minting process
      setTimeout(() => {
        setMintSuccess(true);

        // Reset the form values after successful minting
        setAdminPassword('');
        setPokemonName('');
        setPokemonImage('asset1');
        setPokemonType('');
        setEvolutionStage('1');
      }, 1000); // Simulate 1-second delay for minting
    } else {
      setPasswordError(true); // Show an error if the password is incorrect
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 font-pixel">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Mint a New Pokémon NFT</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Admin Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Admin Password:</label>
            <input
              type="password"
              placeholder="Enter Admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className={`p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 ${
                passwordError ? 'focus:ring-red-500' : 'focus:ring-yellow-300'
              } placeholder-gray-400`}
              required
            />
            {passwordError && (
              <span className="text-red-500 text-sm mt-1">Incorrect password. Please try again.</span>
            )}
          </div>

          {/* Pokémon Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Pokémon Name:</label>
            <input
              type="text"
              placeholder="Enter Pokémon name"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
              className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="mb-1 text-white font-semibold">Image Upload:</label>
            <select
              value={pokemonImage}
              onChange={(e) => setPokemonImage(e.target.value)}
              className="p-3 bg-gray-700 text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <option value="asset1">Choose from existing assets</option>
              <option value="asset2">Pokémon Image 1</option>
              <option value="asset3">Pokémon Image 2</option>
            </select>
          </div>

          {/* Pokémon Type */}
          <div className="flex flex-col">
            <label className="mb-1 text-white font-semibold">Pokémon Type:</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center text-red-500">
                <input
                  type="radio"
                  name="type"
                  value="Fire"
                  checked={pokemonType === 'Fire'}
                  onChange={(e) => setPokemonType(e.target.value)}
                  className="form-radio text-red-500"
                />
                <span className="ml-2">Fire</span>
              </label>
              <label className="inline-flex items-center text-blue-500">
                <input
                  type="radio"
                  name="type"
                  value="Water"
                  checked={pokemonType === 'Water'}
                  onChange={(e) => setPokemonType(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Water</span>
              </label>
              <label className="inline-flex items-center text-slate-500">
                <input
                  type="radio"
                  name="type"
                  value="Electricity"
                  checked={pokemonType === 'Electricity'}
                  onChange={(e) => setPokemonType(e.target.value)}
                  className="form-radio text-yellow-500"
                />
                <span className="ml-2">Electricity</span>
              </label>
            </div>
          </div>

          {/* Evolution Stage */}
          <div className="flex flex-col">
            <label className="mb-1 text-white font-semibold">Evolution Stage:</label>
            <select
              value={evolutionStage}
              onChange={(e) => setEvolutionStage(e.target.value)}
              className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
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
          <div className="mt-6 text-center text-green-400 font-semibold transition-opacity duration-1000 ease-in-out">
            Pokémon NFT minted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMint;