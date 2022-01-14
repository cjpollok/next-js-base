import { forwardRef } from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'

type ButtonProps = Omit<ChakraButtonProps, 'spinnerPlacement' | 'variant'> & {
  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "end"
   */
  spinnerPlacement?: 'end' | 'start'
  /** @default "primary" */
  variant?: 'primary' | 'primaryOutline'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ spinnerPlacement = 'end', ...props }, ref) => (
    <ChakraButton {...props} ref={ref} spinnerPlacement={spinnerPlacement} />
  )
)

Button.displayName = 'Button'

export default Button
