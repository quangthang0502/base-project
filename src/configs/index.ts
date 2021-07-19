export const API_URL: string = process.env.VUE_APP_API_URL

export type ThemeType = 'light' | 'dark'

export const THEMES: Record<ThemeType, string> = {
  light: 'theme-light',
  dark: 'theme-dark'
}
