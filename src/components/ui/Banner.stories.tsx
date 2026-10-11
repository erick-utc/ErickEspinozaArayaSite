import type { Meta, StoryObj } from '@storybook/react-vite';

import { Banner } from './Banner';

const meta = {
  title: 'UI/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'A concise announcement or supporting message.',
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};