import { createWrapper } from 'next-redux-wrapper'
import { configureStore, Store } from '@reduxjs/toolkit'

import reducers from './reducers'
import { StoreInterface } from './types'

const makeStore = () => configureStore({ reducer: reducers })

const wrapper = createWrapper<Store<StoreInterface>>(makeStore)

export { wrapper }
