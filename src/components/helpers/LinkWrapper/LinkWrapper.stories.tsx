import React from 'react';
import type { StoryObj } from '@storybook/react';
import LinkWrapper from './LinkWrapper';
import defaultData from './LinkWrapper.mock-data';

const Meta = { title: 'Helpers/LinkWrapper', component: LinkWrapper };
export default Meta;
export const Default: StoryObj = {
  render: () => <LinkWrapper {...defaultData} />,
};
