import type { Meta, StoryObj } from '@storybook/react-vite';

import { Copy } from './Copy';

const meta = {
  title: 'UI/Copy',
  component: Copy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'p',
    children: 'Clear supporting copy helps explain the content around it.',
    size: 'body',
    tone: 'default',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'strong'],
    },
    children: { control: 'text' },
    className: { control: 'text' },
    size: {
      control: 'select',
      options: ['body', 'lead', 'small', 'label'],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'inverse', 'inverse-muted'],
    },
  },
} satisfies Meta<typeof Copy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Lead: Story = {
  args: {
    size: 'lead',
  },
};

export const Inverse: Story = {
  args: {
    tone: 'inverse',
  },
  render: (args) => (
    <div style={{ background: '#11151a', padding: 24 }}>
      <Copy {...args} />
    </div>
  ),
};