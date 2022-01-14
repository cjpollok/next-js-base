import { theme as defaultTheme } from '@chakra-ui/react'
import { cssVar, SystemStyleFunction } from '@chakra-ui/theme-tools'

import { getModeColor } from '../colors'

const $size = cssVar('spinner-size')

const baseStyle: SystemStyleFunction = (props) => {
  const spinnerColor = getModeColor('brand.primary', props)

  return {
    color: spinnerColor,
    borderLeftColor: 'currentColor',
    width: [$size.reference],
    height: [$size.reference],
  }
}

const Spinner = {
  ...defaultTheme.components.Spinner,
  baseStyle,
}

export default Spinner
