import { ISExample } from './index'
import { GetterTree } from 'vuex'

const getters: GetterTree<ISExample, any> = {
  isLogin: state => {
    return !!state.example
  }
}

export default getters
