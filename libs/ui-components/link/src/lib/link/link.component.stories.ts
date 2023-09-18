import type { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'LinkComponent',
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {},
};
