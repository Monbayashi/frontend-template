import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage4 } from './index';

const meta = {
  title: 'Page/ExamplePage4',
  component: ExamplePage4,
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
} satisfies Meta<typeof ExamplePage4>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
