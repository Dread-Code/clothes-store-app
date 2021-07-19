import axios from 'axios'
import { BASE_URL } from '../constants/servicesConstans'

const searchService = async query => {
  try {
    const { data } = await axios.get(`${BASE_URL}/?q=${query}`)
    return data
  } catch (error) {
    console.log(error)
  }
  return null
}

export default searchService
