// Global
import type { Decorator, Preview } from '@storybook/react';
import { SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-nextjs';

// Lib
import { ThemeContext, ALL_THEMES } from '../src/lib/context/ThemeContext';
import { mockSitecoreContext } from '../src/lib/testing/mocks';

// Local
import '../src/assets/styles/global.css';
import { componentGlobalWrapper, componentThemeWrapper } from './decorators';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'Primary',
      toolbar: {
        icon: 'paintbrush',
        items: ALL_THEMES,
        showName: false,
        dynamicTitle: false,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [componentGlobalWrapper, componentThemeWrapper];

export default preview;
