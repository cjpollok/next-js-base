import { forwardRef } from 'react'

import { StyledButton } from './Button.styles'

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => (
  <StyledButton {...props} ref={ref}>
    {children}
  </StyledButton>
))

Button.displayName = 'Button'

export default Button
