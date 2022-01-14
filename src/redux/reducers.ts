import app from './app/slice'

const reducers = {
  [app.name]: app.reducer,
}

export default reducers
