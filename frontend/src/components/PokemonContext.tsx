import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Stage {
  price?: number;
  stage: number;
  name: string;
  image: string;
  description: string;
  time: string;
  longDescription: string[];
}

export interface PokemonContextType {
  stages: Stage[] | null;
  setStages: (stages: Stage[] | null) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stages, setStages] = useState<Stage[] | null>(null);

  useEffect(() => {
    // Simulate API call to fetch Pokémon stages
    const fetchStages = async () => {
      const response = await fetch('/api/pokemon-stages'); // Update with actual API endpoint
      const data: Stage[] = await response.json(); // Assume the API returns an array of Stage objects
      setStages(data);
    };

    fetchStages();
  }, []);

  return (
    <PokemonContext.Provider value={{ stages, setStages }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};
