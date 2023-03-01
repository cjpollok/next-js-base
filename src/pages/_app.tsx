import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import ThemeProvider from '@/component-library/ThemeProvider'
import { wrapper } from '@/redux/store'

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...props.pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
