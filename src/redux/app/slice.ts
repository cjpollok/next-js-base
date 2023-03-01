import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { StoreInterface, AppState } from '@/redux/types'

const initialState: AppState = { isUserLoggedIn: false }

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    [HYDRATE]: (state, action: PayloadAction<StoreInterface>) => {
      state = {
        ...state,
        ...action.payload.app,
      }
    },
  },
})

export default appSlice
