import { createStore, combineReducers, compose } from 'redux'
import initialState, { initialMeta } from './initialState'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

const reducers = {
  state: (oldState = initialState, action) => {
    const type = action.type.slice(0, 3)

    switch (type) {
      case 'SET':
        return {
          ...oldState,
          ...action.payload,
        }
      default:
        return oldState
    }
  },

  meta: (
    state = initialMeta,
    action
  ) => {
    const { type } = action

    switch (type) {
      case 'SET_ERROR':
        return {
          ...state,
          isError: true,
          error: action.payload,
        }
      case 'CLEAR_ERROR':
        return { ...state, isError: false, error: null }
      case 'START_LOADING':
        return { ...state, loading: true }
      case 'STOP_LOADING':
        return { ...state, loading: false }

      default:
        return state
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
