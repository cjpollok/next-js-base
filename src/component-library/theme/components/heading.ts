import { theme as defaultTheme } from '@chakra-ui/react'
import { SystemStyleFunction } from '@chakra-ui/theme-tools'

import { getModeColor } from '../colors'

const baseStyle: SystemStyleFunction = (props) => {
  const headingColor = getModeColor('text.heading', props)

  return {
    color: headingColor,
    fontFamily: 'heading',
    fontWeight: 'bold',
  }
}

const Heading = {
  ...defaultTheme.components.Heading,
  baseStyle,
}

export default Heading
