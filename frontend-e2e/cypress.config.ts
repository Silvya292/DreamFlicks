import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run frontend:serve',
        production: 'nx run frontend:preview',
      },
      ciWebServerCommand: 'nx run frontend:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    viewportWidth: 1920,
    viewportHeight: 920,
  },
});
