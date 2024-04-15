import { defineConfig } from 'vite';

// For tests.
export default defineConfig({
  plugins: [
    
  ],
  test: {
    api: 51204,
    passWithNoTests: true,
    testTimeout: 15000,
    globals: true,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
  },
  // To enable .js files that contain JSX to be imported by Vitest tests.
  // Reference: https://github.com/vitest-dev/vitest/issues/1564
  esbuild: {
    loader: 'jsx',
    include:[
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: [],
  },
});