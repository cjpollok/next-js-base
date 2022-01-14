import type {
  SystemStyleInterpolation,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools'

import Input from './input'

const baseStyle: SystemStyleFunction = (props) => ({
  ...Input.baseStyle(props).field,
  lineHeight: 'short',
  minHeight: '80px',
  paddingY: '8px',
  verticalAlign: 'top',
})

const variants: Record<string, SystemStyleInterpolation> = {
  outline: (props) => Input.variants.outline(props).field ?? {},
}

const defaultProps = {
  variant: 'outline',
}

const Textarea = {
  baseStyle,
  defaultProps,
  variants,
}

export default Textarea
