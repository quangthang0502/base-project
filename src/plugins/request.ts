import Cookies from 'js-cookie'
import { Message } from 'element-ui'
import { API_URL } from '@/configs'
import { fetchResource, IAxiosCallBack } from '../services'

const defaultToken = Cookies.get('access_token') !== 'undefined' ? 'Bearer ' + Cookies.get('access_token') : ''

const callback: IAxiosCallBack = {
  reqErrorCallBack: err => err,
  reqSuccessCallback: res => res,
  resSuccessCallback: res => res,
  resErrorCallBack: async error => {
    if (!error.response || error.response.status >= 500) {
      // error.message = 'Không thể kết nối đến máy chủ'
      error.message = 'Cannot connect to server'
      Message.error(error.message)
      return Promise.reject(error)
    }

    if (error.response.status < 500) {
      if (error.response.status === 401) {
        return Promise.reject(error)
      } else if (error.status === 400) {
        if (!error.response.data.message) {
          const listErrors = <Array<string[]>>Object.keys(error.response.data).map((key: any) => {
            return error.response.data[key]
          })

          listErrors.forEach(value => {
            value.forEach((err: string) => {
              setTimeout(() => {
                Message.error(err)
              }, 100)
            })
          })
        } else {
          Message.error(error.response.data.message)
        }
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
}

const request = fetchResource(API_URL, defaultToken, callback)
request.defaults.headers.common['app-id'] = '60f5a85033cdb9045900a304'
