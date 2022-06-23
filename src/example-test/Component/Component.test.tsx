import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Component from './Component'

describe('Component', () => {
  it('should not display the text when initially rendered', () => {
    render(<Component />)

    expect(screen.queryByText('Hello, World!')).not.toBeInTheDocument()
  })

  it('should display the text when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<Component />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})
