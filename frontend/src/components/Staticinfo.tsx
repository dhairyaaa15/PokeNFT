import { motion } from 'framer-motion';

const Staticinfo = () => {
  return (
    <motion.div 
      className="relative w-4/5 mx-auto my-12 p-8 rounded-xl bg-transparent shadow-2xl font-pixel"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glowing Background Circles */}
      <div className="absolute top-0 left-0 w-1/3 h-full rounded-full bg-gradient-to-r from-green-400 to-transparent opacity-30 blur-xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-full rounded-full bg-gradient-to-l from-blue-500 to-transparent opacity-30 blur-xl" />

      {/* Two-column layout */}
      <div className="flex justify-between space-x-12">
        {/* Left: How to Buy */}
        <div className="w-1/2">
          <motion.h1 
            className="text-2xl text-blue-300 mb-6 tracking-wider uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How to Buy Pokémon NFTs
          </motion.h1>

          <motion.ul 
            className="list-none text-base text-gray-200 space-y-4 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <li>
              <span className="text-blue-400 font-semibold">Explore the marketplace:</span> Browse Pokémon NFTs and evolution items.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Buy NFTs:</span> Purchase Pokémon from users or the platform.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Acquire evolution items:</span> Instantly evolve your Pokémon with items.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Connect your wallet:</span> Seamlessly buy NFTs and items by linking your wallet.
            </li>
          </motion.ul>
        </div>

        {/* Right: Evolution System */}
        <div className="w-1/2">
          <motion.h1 
            className="text-2xl text-green-300 mb-6 tracking-wider uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Evolution System
          </motion.h1>

          <motion.ul 
            className="list-none text-base text-gray-200 space-y-4 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <li>
              <span className="text-green-400 font-semibold">Pokémon NFTs can evolve:</span> Your Pokémon grow and evolve into more powerful stages.
            </li>
            <li>
              <span className="text-green-400 font-semibold">Two evolution methods:</span> 
              <ul className="list-inside list-disc space-y-1 ml-6">
                <li>Wait for a set time to automatically evolve.</li>
                <li>Use special items like Sun Stone or Metal Coat for instant evolution.</li>
              </ul>
            </li>
            <li>
              <span className="text-green-400 font-semibold">Increase rarity and value:</span> Evolved Pokémon are rarer and worth more.
            </li>
          </motion.ul>
        </div>
      </div>

    </motion.div>
  );
};

export default Staticinfo;
