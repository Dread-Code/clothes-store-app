import axios from 'axios'
import { BASE_URL } from '../../constants/servicesConstants'

const getCategory = async category => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories?category=${category}`)
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}
export default getCategory
