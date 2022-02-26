import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    clickHandler: {
      action: 'clickHandler',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Default Button',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'lg',
};
