import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage1 } from './index';

const meta = {
  title: 'Page/ExamplePage1',
  component: ExamplePage1,
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
} satisfies Meta<typeof ExamplePage1>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
