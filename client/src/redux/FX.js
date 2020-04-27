
import axios from 'axios'
import {Actions} from './Actions'
import store from './index'

const baseURL = 'https://api.spacexdata.com/v3'



export const getFromServer = (theirName) => {
  const { dispatch } = store

  const name = theirName.toLowerCase()

  const url = {
    capsules: `${baseURL}/capsules`,
    landing: `${baseURL}/landing`,
    default: `${baseURL}/`,
  }[name || 'default']



  const fetchData = async () => {
    dispatch({ type: Actions.START_LOADING, payload: Date.now() })
    try {

      const results = await axios(url)
      const namedResults = { [name]: results.data}

      dispatch({ type: Actions.SET(name), payload: namedResults })
      dispatch({ type: Actions.STOP_LOADING, payload: Date.now() })

    } catch (e) {
      console.error(e)

      dispatch({ type: Actions.STOP_LOADING, payload: Date.now() })
      dispatch({ type: Actions.SET_ERROR, payload: e })

      throw new Error('Fetch Failed, check the API')
    }
  }
  fetchData()
}
