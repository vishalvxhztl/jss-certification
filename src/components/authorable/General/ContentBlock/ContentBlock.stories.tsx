import React from 'react';
import type { StoryObj } from '@storybook/react';
import ContentBlock from './ContentBlock';
import defaultData from './ContentBlock.mock-data';

const Meta = { title: 'Authorable/General/ContentBlock', component: ContentBlock };
export default Meta;
export const Default: StoryObj = {
  render: () => <ContentBlock {...defaultData} />,
};
