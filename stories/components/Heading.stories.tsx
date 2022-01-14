import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from '../../src/component-library'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: { type: 'radio' },
      defaultValue: 'h2',
      description: 'The semantic tag used by the heading',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        defaultValue: { summary: 'h2' },
        type: {
          summary: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
        },
      },
      type: { name: 'string', required: false },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Heading Copy',
      description: 'The displayed content in the heading',
      type: { name: 'string', required: true },
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'xl',
      description:
        'The size variant of the heading, which includes properties such as fontSize, lineHeight, fontWeight and fontFamily',
      options: ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        defaultValue: { summary: 'xl' },
        type: {
          summary: "'4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
        },
      },
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    controls: {
      include: ['as', 'children', 'size'],
    },
    docs: {
      description: {
        component: 'Headings are used for rendering headlines.',
      },
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {}
