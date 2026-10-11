import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from './Image';

const meta = {
  title: 'UI/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    src: `${import.meta.env.BASE_URL}erick-profile.jpg`,
    alt: 'Portrait of Erick Gerardo Espinoza Araya',
    width: 320,
    height: 320,
    className: 'h-64 w-64 rounded-xl',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};