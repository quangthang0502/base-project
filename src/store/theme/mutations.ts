import { THEMES, ThemeType } from '@/configs'
import { MutationTree } from 'vuex'
import { ISTheme } from '.'

const mutations: MutationTree<ISTheme> = {
  SET_THEME: (state, theme: ThemeType) => {
    state.theme = THEMES[theme] || THEMES['light']
    localStorage.setItem('theme', state.theme)
  }
}
export default mutations
