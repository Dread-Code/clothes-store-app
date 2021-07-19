import axios from 'axios'
import { BASE_URL } from '../constants/servicesConstans'

const getProductos = async () => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}

export default getProductos
