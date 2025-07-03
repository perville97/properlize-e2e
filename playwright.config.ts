import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'node server.js',
    port: 3000,
    timeout: 30 * 1000,
    reuseExistingServer: true,
  },
});
