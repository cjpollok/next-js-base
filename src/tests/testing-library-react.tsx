import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import ThemeProvider from '@/component-library/ThemeProvider'

const WithProviders = ({ children }: Props) => (
  <ThemeProvider>{children}</ThemeProvider>
)

interface Props {
  children: React.ReactNode
}

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(component, { wrapper: WithProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
