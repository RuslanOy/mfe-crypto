import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from '@/shared/chakra/ui/provider.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config.ts';

const queryClient = new QueryClient();

const CryptoApp: React.FC = () => {
  return (
    <StrictMode>
      <Provider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </WagmiProvider>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<CryptoApp />);
