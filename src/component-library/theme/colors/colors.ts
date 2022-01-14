import { Colors } from '@chakra-ui/react'

const white = '#fff'

const light = {
  background: {
    primary: white,
  },
  brand: {
    primary: '#9510ac',
    primaryFocus: '#ca87d5',
    secondary: '#2d9bf0',
    secondaryFocus: '#84c6fa',
    tertiary: '#414bb2',
    tertiaryFocus: '#a0a5d8',
  },
  functional: {
    graphic: '#c7c7c7',
    inactive: '#808080',
  },
  status: {
    error: '#e53e3e',
    errorLight: '#fed7d7',
  },
  text: {
    body: '#1a1a1a',
    heading: '#333',
    inverted: white,
  },
}

const dark = {
  background: {
    primary: '#1a202c',
  },
}

const colors: Colors = {
  light,
  dark,
}

export default colors

// https://smart-swatch.netlify.app/
// https://coolors.co/
