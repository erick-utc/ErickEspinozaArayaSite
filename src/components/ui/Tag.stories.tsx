import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tag } from './Tag';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Product design',
    tone: 'dark',
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    tone: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  render: (args) => (
    <div style={{ background: '#11151a', padding: 24 }}>
      <Tag {...args} />
    </div>
  ),
};

export const Light: Story = {
  args: {
    tone: 'light',
  },
};