import { ThemeType } from '@/configs'
import { ActionTree } from 'vuex'
import { ISTheme } from '.'

const actions: ActionTree<ISTheme, unknown> = {
  setTheme({ commit }, theme: ThemeType) {
    commit('SET_THEME', theme)
  }
}

export default actions
