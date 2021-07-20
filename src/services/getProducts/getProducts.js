import axios from 'axios'
import { BASE_URL } from '../../constants/servicesConstants'

const getProductos = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/shop?_page=${1}`)
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}

export default getProductos
