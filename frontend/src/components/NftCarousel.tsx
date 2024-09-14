export default function NftCarousel() {
    return (
      <div className="w-3/10 p-4 bg-black rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-white">STAGE (1,2,3)</h2>
        <div className="w-full h-48 bg-gray-800 mb-2 relative overflow-hidden">
          <img
            src="/placeholder.svg?height=192&width=192"
            alt="Pixelated Pokémon-like creature"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold mb-1 text-white">Name</h3>
        <p className="text-sm text-gray-300 mb-4">
          appearance description of the respective Pokémon
        </p>
        <div className="flex justify-between mb-2">
          <button className="px-3 py-1 bg-gray-600 text-white rounded">Previous</button>
          <button className="px-3 py-1 bg-gray-600 text-white rounded">Next</button>
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded font-bold">
          BUY NFT
        </button>
      </div>
    );
  }
  