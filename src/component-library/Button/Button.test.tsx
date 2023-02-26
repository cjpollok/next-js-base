import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests/testing-library-react'

import Button from './Button'

describe('Button', () => {
  it('should call the `onClick` function when clicked', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(onClick).toBeCalled()
  })
})
