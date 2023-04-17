// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Text, { TEXT_TAGS } from './Text';
import defaultData from './Text.mock-data';

const meta: Meta<typeof Text> = {
  title: 'Authorable/General/Text',
  component: Text,
  argTypes: {
    tag: {
      control: 'select',
      options: TEXT_TAGS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
