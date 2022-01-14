import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../../src/component-library'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Click me',
      description: 'The displayed content in the button',
      type: { name: 'string' || 'function', required: true },
    },
    isActive: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, the button will be styled in its active state.',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, the button will be disabled.',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    isFullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
      description:
        'If true, the button will take up the full width of its container.',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, the button will show a spinner.',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    loadingText: {
      control: { type: 'text' },
      defaultValue: '',
      description:
        'The label to show in the button when isLoading is true If no text is passed, it only shows the spinner',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'The visual style of the button',
      options: ['primary', 'primaryOutline'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: "'primary' | 'primaryOutline'",
        },
      },
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    controls: {
      include: [
        'children',
        'isActive',
        'isDisabled',
        'isFullWidth',
        'isLoading',
        'loadingText',
        'variant',
      ],
    },
    docs: {
      description: {
        component:
          'The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}
