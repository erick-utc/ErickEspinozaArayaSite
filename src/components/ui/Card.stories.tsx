import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'article',
    children: 'A flexible surface for grouping related content.',
    className: 'w-80',
    variant: 'light',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['article', 'section', 'div'],
    },
    children: { control: 'text' },
    className: { control: 'text' },
    variant: {
      control: 'select',
      options: ['light', 'dark', 'glass'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
  render: (args) => (
    <div style={{ background: '#11151a', padding: 24 }}>
      <Card {...args} />
    </div>
  ),
};