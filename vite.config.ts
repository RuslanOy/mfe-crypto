import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@public': path.resolve(__dirname, './public'),
        '@entities': path.resolve(__dirname, './src/entities'),
      },
    },
    server: {
      host: true,
      port: 5103,
    },
    plugins: [
      react(),
      federation({
        name: 'mfeCrypto',
        filename: 'remoteEntry.js',
        exposes: {
          './Crypto': './src/app/App.tsx',
        },
        shared: ['react', 'react-dom', '@chakra-ui/react', 'wagmi', 'viem'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      chunkSizeWarningLimit: 1000,
    },
  };
});
