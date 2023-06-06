// Global
import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';
import React from 'react';
import { SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Decorator } from '@storybook/react';

// Lib
import { mockSitecoreContext } from '../src/lib/testing/mocks';
import { ThemeContext } from '../src/lib/context/ThemeContext';

export const componentFlagSmithWrapper: Decorator = (Story) => (
  <FlagsmithProvider
    flagsmith={flagsmith}
    options={{ environmentID: process.env.FLAGSMITH_ENVIRONMENT_ID || '' }}
  >
    <Story />
  </FlagsmithProvider>
);

export const componentGlobalWrapper: Decorator = (Story) => (
  <SitecoreContextReactContext.Provider value={mockSitecoreContext}>
    <div>
      <Story />
    </div>
  </SitecoreContextReactContext.Provider>
);

export const componentThemeWrapper: Decorator = (Story, context) => (
  <SitecoreContextReactContext.Provider value={mockSitecoreContext}>
    <div className={context.globals.theme}>
      <ThemeContext.Provider value={context.globals.themeName}>
        <Story />
      </ThemeContext.Provider>
    </div>
  </SitecoreContextReactContext.Provider>
);
