import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Stage {
  stage: number;
  name: string;
  image: string;
  description: string;
  time: string;
  longDescription: string[];
}

interface PokemonContextType {
  stages: Stage[] | null;
  setStages: (stages: Stage[] | null) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stages, setStages] = useState<Stage[] | null>(null);

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
