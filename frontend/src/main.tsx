import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PokemonProvider } from './components/PokemonContext.tsx'; // Import the PokemonProvider

const wallets = [new PetraWallet()];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <PokemonProvider> {/* Wrap App with PokemonProvider */}
        <App />
      </PokemonProvider>
    </AptosWalletAdapterProvider>
  </StrictMode>
);
