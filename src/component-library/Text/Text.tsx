import { forwardRef } from 'react'
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react'

type TextProps = Omit<ChakraTextProps, 'as'> & {
  /** @default "p" */
  as?: 'cite' | 'em' | 'i' | 'mark' | 'p' | 's' | 'span' | 'strong' | 'u'
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <ChakraText {...props} ref={ref} />
))

Text.displayName = 'Text'

export default Text
