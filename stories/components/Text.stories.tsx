import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '../../src/component-library'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: {
      control: { type: 'radio' },
      defaultValue: 'p',
      description: 'The semantic tag used by the text',
      options: ['cite', 'em', 'i', 'mark', 'p', 's', 'span', 'strong', 'u'],
      table: {
        defaultValue: { summary: 'p' },
        type: {
          summary:
            "'cite' | 'em' | 'i' | 'mark' | 'p' | 's' | 'span' | 'strong' | 'u'",
        },
      },
      type: { name: 'string', required: false },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Text Copy',
      description: 'The displayed content in the text',
      type: { name: 'string', required: true },
    },
    fontSize: {
      control: { type: 'radio' },
      defaultValue: 'md',
      description: 'The size variant of the text',
      options: [
        '6xl',
        '5xl',
        '4xl',
        '3xl',
        '2xl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs',
      ],
      table: {
        defaultValue: { summary: 'md' },
        type: {
          summary:
            "'6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
        },
      },
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    controls: {
      include: ['as', 'children', 'fontSize'],
    },
    docs: {
      description: {
        component:
          'The Text component is used to render text and paragraphs within an interface.',
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {}
