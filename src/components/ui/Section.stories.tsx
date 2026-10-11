import type { Meta, StoryObj } from '@storybook/react-vite';

import { Section } from './Section';

const meta = {
  title: 'UI/Section',
  component: Section,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    children: 'A full-width section for organizing page content.',
    className: 'max-w-xl',
    tone: 'default',
  },
  argTypes: {
    id: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
    tone: {
      control: 'select',
      options: ['default', 'light', 'dark', 'hero'],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Light: Story = {
  args: {
    tone: 'light',
  },
};

export const Dark: Story = {
  args: {
    tone: 'dark',
  },
};

export const Hero: Story = {
  args: {
    tone: 'hero',
  },
};