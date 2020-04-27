import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const baseURL = PROCESS.env.BASE_URL


export const getFromServer = name => {
  const dispatch = useDispatch()


  const url = {
    capsules: `${baseURL}/capsules`,
    landing: `${baseURL}/landing`,
    default: `${baseURL}/`,
  }[name || 'default']

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: Actions.START_LOADING, payload: Date.now() })
        const results = await axios(url)
        dispatch({ type: Actions.SET(name), payload: results })
        dispatch({ type: Actions.STOP_LOADING, payload: Date.now() })
      } catch (e) {
        console.error(e)
        dispatch({ type: Actions.STOP_LOADING, payload: Date.now() })
        dispatch({ type: Actions.SET_ERROR, payload: e  })
        throw new Error('Fetch Failed, check the API')
      }
    }
    fetchData()
  }, [])
}
