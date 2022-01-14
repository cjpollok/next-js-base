import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput } from '../../src/component-library'

export default {
  title: 'Components/TextInput',
  component: TextInput,
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
      defaultValue: 'textInput-id',
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
    type: {
      control: { type: 'radio' },
      defaultValue: 'text',
      description: '',
      options: ['email', 'password', 'tel', 'text'],
      table: {
        defaultValue: { summary: 'text' },
        type: {
          summary: "'email' | 'password' | 'tel' | 'text'",
        },
      },
      type: { name: 'string', required: false },
    },
    value: {
      control: { type: 'text' },
      description: 'The displayed content in the textInput (controlled)',
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
        'type',
        'value',
      ],
    },
    docs: {
      description: {
        component:
          'The TextInput component is a component that is used to get user input in a text field.',
      },
    },
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Default = Template.bind({})
Default.args = {}
