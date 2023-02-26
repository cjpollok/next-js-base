import type { AppProps } from 'next/app'

import ThemeProvider from '@/component-library/ThemeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
