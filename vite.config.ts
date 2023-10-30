import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react({ plugins: [['@swc/plugin-styled-components', {}]] })],
    server: {
      port: Number(process.env.VITE_PORT),
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: [
        { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
        { find: '@', replacement: path.resolve(__dirname, '/src') },
        { find: '_', replacement: path.resolve(__dirname, '/test') },
      ],
    },
  });
};
