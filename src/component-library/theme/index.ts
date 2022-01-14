import { theme as defaultTheme } from '@chakra-ui/react'

import colors from './colors'
import components from './components'
import fonts from './fonts'
import styles from './styles'

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
  components: {
    ...defaultTheme.components,
    ...components,
  },
  fonts: {
    ...defaultTheme.fonts,
    ...fonts,
  },
  styles: {
    ...defaultTheme.styles,
    ...styles,
  },
}

export default theme
