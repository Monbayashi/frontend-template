import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage5 } from './index';

const meta = {
  title: 'Page/ExamplePage5',
  component: ExamplePage5,
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
} satisfies Meta<typeof ExamplePage5>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
