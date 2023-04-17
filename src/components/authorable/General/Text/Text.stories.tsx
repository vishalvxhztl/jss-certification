// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Text, { TEXT_TAGS } from './Text';
import defaultData, { h1Data, h2Data, h3Data, h4Data, h5Data, h6Data } from './Text.mock-data';

const meta: Meta<typeof Text> = {
  argTypes: {
    tag: {
      control: 'select',
      options: TEXT_TAGS,
    },
  },
  component: Text,
  tags: ['autodocs'],
  title: 'Authorable/General/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};

export const heading1: Story = {
  args: {
    ...h1Data,
  },
};

export const heading2: Story = {
  args: {
    ...h2Data,
  },
};

export const heading3: Story = {
  args: {
    ...h3Data,
  },
};

export const heading4: Story = {
  args: {
    ...h4Data,
  },
};

export const heading5: Story = {
  args: {
    ...h5Data,
  },
};

export const heading6: Story = {
  args: {
    ...h6Data,
  },
};
