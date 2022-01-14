import type { AppProps } from 'next/app'

import { wrapper } from '@/redux/store'

import '@/styles/normalize.scss'
import '@/styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp)
