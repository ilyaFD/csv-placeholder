import axios from 'axios';
import { getDataObject, API_URL } from '.';

export const getPosts = async (query) => {
    const result = getDataObject()
    try {
      const responce = await axios.get(`${API_URL}/posts?${query}`)
      result.data = responce.data
    } catch (error) {
      result.error = error.message
    }
    return result
}