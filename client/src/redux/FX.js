import axios from 'axios'
import { Actions } from './Actions'
import store from './index'

export const baseURL = 'https://api.spacexdata.com/v3'

export const getFromServer = (theirName, theirId) => {
  const { dispatch } = store

  const name = theirName.toLowerCase()
  const ourId = theirId ? theirId : ''

  const url = name === 'capsules' 
    ? `${baseURL}/capsules` 
    : `${baseURL}/landpads/${ourId}`

  const fetchData = async () => {
    dispatch({ type: Actions.START_LOADING, payload: Date.now() })
    try {
      dispatch({ type: Actions.GET(name), payload: { time: Date.now() } })

      const results = await axios.request({
        method: 'get',
        url,
        crossDomain: true,
      })

      const namedResults = { [name]: results.data }

      dispatch({
        type: Actions.SET(name),
        payload: namedResults,
        time: Date.now(),
      })
    } catch (e) {
      console.error(e)
      dispatch({ type: Actions.SET_ERROR, payload: { e } })
      throw new Error('Fetch Failed, check the API')
    }
    finally {
      dispatch({ type: Actions.STOP_LOADING, payload: Date.now() })
    }

  }
  return fetchData()
}
