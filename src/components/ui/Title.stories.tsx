import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './Title';

const meta = {
  title: 'UI/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'A clear section title',
    level: 2,
    inverse: false,
  },
  argTypes: {
    children: { control: 'text' },
    level: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
    inverse: { control: 'boolean' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PageTitle: Story = {
  args: {
    level: 1,
  },
};

export const Inverse: Story = {
  args: {
    inverse: true,
  },
  render: (args) => (
    <div style={{ background: '#11151a', padding: 24 }}>
      <Title {...args} />
    </div>
  ),
};