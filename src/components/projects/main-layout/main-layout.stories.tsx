import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './index';

const meta = {
  title: 'Ui-Parts/MainLayout',
  component: MainLayout,
} satisfies Meta<typeof MainLayout>;
export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Email: Story = {
  args: {
    routeId: 'example-page-1',
    children: <div>HELLO WORLOD</div>,
  },
};
