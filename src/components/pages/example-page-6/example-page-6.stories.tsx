import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage6 } from './index';

const meta = {
  title: 'Page/ExamplePage6',
  component: ExamplePage6,
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExamplePage6>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
