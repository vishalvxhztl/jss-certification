// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import LinkWrapper from './LinkWrapper';
import defaultData from './LinkWrapper.mock-data';

const meta: Meta<typeof LinkWrapper> = {
  title: 'Helpers/LinkWrapper',
  component: LinkWrapper,
  argTypes: {
    'field.value.linktype': { control: 'select', options: ['external'] },
    'field.value.target': { control: 'select', options: ['_blank', '_self', '_parent', '_top'] },
  } as any,
};

export default meta;

type Story = StoryObj<typeof LinkWrapper>;

export const Default: Story = {
  render: (args) => {
    return <LinkWrapper {...expandObj(args)} {...args} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
