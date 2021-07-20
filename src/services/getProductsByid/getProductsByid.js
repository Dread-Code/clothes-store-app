import axios from 'axios'
import { BASE_URL } from '../../constants/servicesConstants'

const getProductsByid = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories/${id}?_embed=shop`)
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}

export default getProductsByid
