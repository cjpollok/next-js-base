import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from '../../src/component-library'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    errorMessage: {
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    helpText: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    id: {
      description: "The element's unique identifier",
      defaultValue: 'textarea-id',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    isReadOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    isRequired: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    label: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    placeholder: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    value: {
      control: { type: 'text' },
      description: 'The displayed content in the textarea (controlled)',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  },
  parameters: {
    controls: {
      include: [
        'errorMessage',
        'helpText',
        'id',
        'isDisabled',
        'isReadOnly',
        'isRequired',
        'label',
        'placeholder',
        'value',
      ],
    },
    docs: {
      description: {
        component:
          'The Textarea component allows you to easily create multi-line text inputs.',
      },
    },
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const Default = Template.bind({})
Default.args = {}
