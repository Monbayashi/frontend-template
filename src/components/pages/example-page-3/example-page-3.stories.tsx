import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { ExamplePage3 } from './index';

const meta = {
  title: 'Page/ExamplePage3',
  component: ExamplePage3,
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
} satisfies Meta<typeof ExamplePage3>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
