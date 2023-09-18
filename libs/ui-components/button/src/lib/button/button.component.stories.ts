import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Filled: Story = {
  args: {
    type: 'filled',
  },
};

export const Clear: Story = {
  args: {
    type: 'clear',
  },
};
