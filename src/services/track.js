import axios from 'axios'
import PlatziApiUrl from './apiUrl'

const trackService = {}

trackService.search = async (q) => {
  const type = 'track'

  const response = await axios.get(`${PlatziApiUrl.apiUrl}search`, {
    params: { q, type },
  })
  const data = response.data
  return data
}

trackService.getById = async (track) => {
  const responseId = await axios.get(`${PlatziApiUrl.apiUrl}tracks/${track}`)

  const id = responseId.data

  return id
}

export default trackService
