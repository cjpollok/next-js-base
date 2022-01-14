import { ComponentProps } from 'react'
import { ChakraProvider as ChakraThemeProvider } from '@chakra-ui/react'

const ThemeProvider = (props: ComponentProps<typeof ChakraThemeProvider>) => (
  <ChakraThemeProvider {...props} />
)

export default ThemeProvider
