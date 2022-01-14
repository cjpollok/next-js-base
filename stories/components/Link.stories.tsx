import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from '../../src/component-library'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Click me',
      description: 'The displayed content in the link',
      type: { name: 'string' || 'function', required: true },
    },
    href: {
      control: { type: 'text' },
      defaultValue: 'https://www.example.com',
      description: 'The URL that the link points to',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    isExternal: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, the link will open in new tab',
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'inline',
      description: 'The visual style of the link',
      options: ['inline', 'standalone'],
      table: {
        defaultValue: { summary: 'inline' },
        type: {
          summary: "'inline' |'standalone'",
        },
      },
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    controls: {
      include: ['children', 'href', 'isExternal', 'variant'],
    },
    docs: {
      description: {
        component:
          'Links are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink and semantically renders an <a>.',
      },
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {}
