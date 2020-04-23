import { createStore, combineReducers, compose } from 'redux'
import initialState from './initialState'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

const reducers = {
  state: (oldState = initialState, action) => {
    const { type } = action
    switch (type) {
      case 'GET_CAPSULES':
        return oldState
      case 'GET_LANDING_PAD':
        return oldState
      default:
        return oldState
    }
  },
}

const slices = combineReducers({ ...reducers })

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose

const store = createStore(slices, composeEnhancers())

export default store
