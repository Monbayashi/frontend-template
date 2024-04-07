import type { Meta, StoryObj } from '@storybook/react';
import { FormInputWrapper } from './index';

const meta = {
  title: 'Ui-Parts/FormInputWrapper',
  component: FormInputWrapper,
} satisfies Meta<typeof FormInputWrapper>;
export default meta;

type Story = StoryObj<typeof FormInputWrapper>;

export const Email: Story = {
  args: {
    htmlFor: 'email',
    labelText: 'Email アドレス',
    children: (
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="off"
        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    ),
    errorMsg: '',
  },
};

export const Input: Story = {
  args: {
    htmlFor: 'name',
    labelText: '名前',
    children: (
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="off"
        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    ),
    errorMsg: '',
  },
};
