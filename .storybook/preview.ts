import type { Preview } from '@storybook/react';
import '../src/assets/styles/global.css';
import { componentGlobalWrapper } from './decorators';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [componentGlobalWrapper];

export default preview;
