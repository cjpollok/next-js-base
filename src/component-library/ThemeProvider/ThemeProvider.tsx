import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalMainStyle from '@/styles/main.styles'
import GlobalNormalizeStyle from '@/styles/normalize.styles'

import theme from './theme'

const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={theme}>
    <GlobalNormalizeStyle />
    <GlobalMainStyle />
    {children}
  </StyledThemeProvider>
)

interface Props {
  children: React.ReactNode
}

export default ThemeProvider
