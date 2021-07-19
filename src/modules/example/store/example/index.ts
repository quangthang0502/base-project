import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export interface ISExample {
  example: string | number
}

const state: ISExample = {
  example: 1
}

const beAuth: Module<ISExample, unknown> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default beAuth
