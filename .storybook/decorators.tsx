import React from 'react';
import { Decorator } from '@storybook/react';

export const componentGlobalWrapper: Decorator = (Story) => (
  <div className="p-2">
    <Story />
  </div>
);
