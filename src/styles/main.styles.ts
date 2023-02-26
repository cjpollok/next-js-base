import { Montserrat } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const montserrat = Montserrat({ subsets: ['latin'] })

const GlobalMainStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    font-family: ${montserrat.style.fontFamily}, Montserrat, sans-serif;
    font-size: 16px;
    height: 100%;
    min-width: 422px;
  }

  #__next {
    height: 100%;
  }
`

export default GlobalMainStyle
