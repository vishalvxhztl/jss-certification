import React from 'react';
import type { StoryObj } from '@storybook/react';
import RichTextA11yWrapper from './RichTextA11yWrapper';
import defaultData from './RichTextA11yWrapper.mock-data';

const Meta = { title: 'Helpers/RichTextA11yWrapper', component: RichTextA11yWrapper };
export default Meta;
export const Default: StoryObj = {
  render: () => <RichTextA11yWrapper {...defaultData} />,
};
