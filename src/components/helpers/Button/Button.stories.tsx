// Global
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Button, { BUTTON_TYPES } from './Button';
import defaultData, { disabled, iconLeft, iconOnly, iconRight, loading } from './Button.mock-data';

const meta: Meta<typeof Text> = {
  argTypes: {
    auto: {
      control: 'boolean',
      defaultValue: false,
      description: 'Determines if the button has a minimum width or sizes to fit its content.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag indicated the enabled/disabled state of the button.',
    },
    iconLeft: {
      control: 'select',
      description: "Specifies an icon to appear to the left of the button's label.",
      options: Object.keys(FaIcons),
    },
    iconRight: {
      control: 'select',
      description: "Specifies an icon to appear to the right of the button's label.",
      options: Object.keys(FaIcons),
    },
    id: {
      description: 'The name of the "id" attribute to be added to the rendered element.',
    },
    label: {
      defaultValue: 'Button',
      description: "The button's label.",
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag indicated the not loading/loading state of the button.',
    },
    onClick: {
      description: 'A function defining a click handler for the button.',
    },
    ref: {
      description: 'A React hook to be assigned to the button.',
    },
    tag: {
      control: 'select',
      defaultValue: 'button',
      description: 'The HTML tag as which the button will be rendered.',
      options: ['a', 'button'],
    },
    title: {
      description: 'The value of the "title" attribute to be added to the rendered element.',
    },
    type: {
      control: 'select',
      defaultValue: 'default',
      description: 'The display state of the button.',
      options: BUTTON_TYPES,
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Helpers/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};

export const Disabled: Story = {
  args: {
    ...disabled,
  },
};

export const IconLeft: Story = {
  args: {
    ...iconLeft,
  },
};

export const IconOnly: Story = {
  args: {
    ...iconOnly,
  },
};

export const IconRight: Story = {
  args: {
    ...iconRight,
  },
};

export const Loading: Story = {
  args: {
    ...loading,
  },
};
