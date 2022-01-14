import { forwardRef } from 'react'
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react'

type HeadingProps = Omit<ChakraHeadingProps, 'as'> & {
  /** @default "h2" */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <ChakraHeading {...props} ref={ref} />
))

Heading.displayName = 'Heading'

export default Heading
