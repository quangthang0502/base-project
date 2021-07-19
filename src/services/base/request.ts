import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IAxiosCallBack {
  reqSuccessCallback?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>
  reqErrorCallBack?: (value: any) => any | Promise<any>
  resSuccessCallback?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
  resErrorCallBack?: (value: any) => any | Promise<any>
}

const request = axios.create({
  withCredentials: false
})

request.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

export function fetchResource(baseUrl: string, defaultToken: string, callback?: IAxiosCallBack): AxiosInstance {
  request.defaults.baseURL = baseUrl
  request.defaults.headers.common['Authorization'] = defaultToken
  request.interceptors.request.use(callback?.reqSuccessCallback, callback?.reqErrorCallBack)
  request.interceptors.response.use(callback?.resSuccessCallback, callback?.resErrorCallBack)
  return request
}

export default request
