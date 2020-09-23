import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000
})

export default api
