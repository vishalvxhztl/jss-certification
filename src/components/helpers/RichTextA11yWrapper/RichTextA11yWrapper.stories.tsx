// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import RichTextA11yWrapper from './RichTextA11yWrapper';
import defaultData from './RichTextA11yWrapper.mock-data';

const meta: Meta<typeof RichTextA11yWrapper> = {
  title: 'Helpers/RichTextA11yWrapper',
  component: RichTextA11yWrapper,
  argTypes: {
    editable: { control: 'boolean' },
  } as any,
};

export default meta;

type Story = StoryObj<typeof RichTextA11yWrapper>;

export const Default: Story = {
  render: (args) => {
    return <RichTextA11yWrapper {...expandObj(args)} {...args} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
