import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from '../../src/component-library'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'radio' },
      defaultValue: 'md',
      description: 'The size variant of the spinner',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        defaultValue: { summary: 'md' },
        type: {
          summary: "'xl' |'lg' | 'md' | 'sm' | 'xs'",
        },
      },
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    controls: {
      include: ['size'],
    },
    docs: {
      description: {
        component:
          'Spinners provide a visual cue that an action is either processing, awaiting a course of change or a result.',
      },
    },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}
