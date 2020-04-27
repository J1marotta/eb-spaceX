import { createStore, combineReducers, compose } from 'redux'
import initialState from './initialState'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'
import { getFromServer } from '.././redux/FX'

const reducers = {
  state: (oldState = initialState, action) => {
    const { type } = action
    switch (type) {
      case 'GET':
        getFromServer(action.payload)
      case 'SET':
        return {
          oldState,
          ...action.payload
        }
      default:
        return oldState
    }
  },
  error: (state = {} , action ) => {
    const { type } = action
    switch (type) {
      case 'SET_ERROR':
        return {...state, isError: true, error: action.payload }
      case 'CLEAR_ERROR':
        return {...state, isError: false, error: null }
      default:
        return state
    }
  },
  loading: (state = {} , action ) => {
    const { type } = action
    switch (type) {
      case 'START_LOADING':
        return {...state, loading: true }
      case 'STOP_LOADING':
        return {...state, loading: false }
      default:
        return state
    }
  }
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
