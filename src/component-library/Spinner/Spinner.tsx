import { forwardRef } from 'react'
import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from '@chakra-ui/react'

const Spinner = forwardRef<HTMLDivElement, ChakraSpinnerProps>((props, ref) => (
  <ChakraSpinner {...props} ref={ref} />
))

Spinner.displayName = 'Spinner'

export default Spinner
