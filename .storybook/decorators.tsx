import React from 'react';
import { SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Decorator } from '@storybook/react';
import { mockSitecoreContext } from '../src/lib/testing/mocks';

export const componentGlobalWrapper: Decorator = (Story) => (
  <SitecoreContextReactContext.Provider value={mockSitecoreContext}>
    <div className="p-2">
      <Story />
    </div>
  </SitecoreContextReactContext.Provider>
);
