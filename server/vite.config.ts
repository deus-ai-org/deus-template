import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

export default defineConfig({
  define: { 'import.meta.vitest': false },
  plugins: [tsconfigPaths()],
  test: {
    env: {
      DATABASE_URL: process.env.TEST_DATABASE_URL ?? '',
      S3_BUCKET: process.env.TEST_S3_BUCKET ?? '',
    },
    setupFiles: ['tests/setup.ts'],
    includeSource: ['**/*.ts'],
    // include: ['**/index.test.ts'],
    threads: false,
    hookTimeout: 100000,
    testTimeout: 10000,
  },
});
