import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  define: {
    appName: JSON.stringify('my-custom-name'),
    BUILD_DATE: new Date(),
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: { src: resolve('src/') },
  },
});
