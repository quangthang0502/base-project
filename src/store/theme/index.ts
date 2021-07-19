import { THEMES } from '@/configs'
import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export interface ISTheme {
  theme: string
}

const state: ISTheme = {
  theme: localStorage.getItem('theme') || THEMES['light']
}

const beAuth: Module<ISTheme, unknown> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default beAuth
