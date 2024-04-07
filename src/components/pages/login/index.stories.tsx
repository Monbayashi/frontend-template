import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../../../app/layout';
import { LoginPage } from './index';

const meta = {
  title: 'Page/Login',
  component: LoginPage,
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
} satisfies Meta<typeof LoginPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
