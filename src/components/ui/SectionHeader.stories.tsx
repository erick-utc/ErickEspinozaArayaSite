import type { Meta, StoryObj } from '@storybook/react-vite';

import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    kicker: 'OUR APPROACH',
    title: 'Built around clarity',
    inverse: false,
  },
  argTypes: {
    kicker: { control: 'text' },
    title: { control: 'text' },
    inverse: { control: 'boolean' },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverse: Story = {
  args: {
    inverse: true,
  },
  render: (args) => (
    <div style={{ background: '#11151a', padding: 24 }}>
      <SectionHeader {...args} />
    </div>
  ),
};