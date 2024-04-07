import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage2 } from './index';

const meta = {
  title: 'Page/ExamplePage2',
  component: ExamplePage2,
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
} satisfies Meta<typeof ExamplePage2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
