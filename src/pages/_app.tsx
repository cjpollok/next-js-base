import type { AppProps } from 'next/app'

import '@/styles/normalize.scss'
import '@/styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
