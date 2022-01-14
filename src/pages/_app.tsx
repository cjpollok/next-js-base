import type { AppProps } from 'next/app'

import { theme, ThemeProvider } from '@/component-library'

import '@/styles/normalize.scss'
import '@/styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
