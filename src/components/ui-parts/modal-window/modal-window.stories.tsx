import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';

const meta = {
  title: 'Ui-Parts/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
