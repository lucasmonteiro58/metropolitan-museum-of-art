import Axios from 'axios'

export default function useAxios() {
  const baseUrl = ref<string>(import.meta.env.VITE_API_URL)
  const axios = Axios.create({
    baseURL: baseUrl.value,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  function get(url: string, params?: any) {
    return axios.get(url, params)
  }

  return {
    axios,
    get
  }
}
