import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'

// interface ApiClientConfig extends AxiosRequestConfig {
//   baseURL?: string
// }

class ApiClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create()

    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        console.error('API Error:', error)
        return Promise.reject(error)
      }
    )
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config)
    return response.data
  }
}

// Create a default instance
const apiClient = new ApiClient()

export { apiClient }
