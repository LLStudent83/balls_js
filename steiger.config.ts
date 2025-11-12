import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
  {
    files: ['./src/shared/**'],
    rules: {
      'fsd/no-public-api-sidestep': 'off',
      'fsd/public-api': 'off',
    },
  },
  {
    files: ['./src/shared/ui/shadcn/**'],
    rules: {
      'fsd/no-reserved-folder-names': 'off',
    },
  },
]);
