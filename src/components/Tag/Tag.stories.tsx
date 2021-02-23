import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import Tag, { TagProps } from '.';
import { FiPlus } from 'react-icons/fi';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: 'Teste',
  className: 'text-yellow-500 bg-blue-500 bg-opacity-10 mb-4',
} as TagProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FiPlus />,
  className: 'text-green-500 bg-green-500 bg-opacity-10 mb-4',
} as TagProps;

export const WithIconAndText = Template.bind({});
WithIconAndText.args = {
  text: 'Adicionar',
  icon: <FiPlus />,
  className: 'text-green-500 bg-green-500 bg-opacity-10 mb-4',
} as TagProps;
