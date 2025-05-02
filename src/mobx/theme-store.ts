import { makeAutoObservable } from 'mobx'

class ThemeStore {
  theme: 'darkTheme' | 'lightTheme' = 'darkTheme'

  constructor() {
    makeAutoObservable(this)
  }

  switchTheme = () => {
    if (this.theme === 'darkTheme') {
      this.theme = 'lightTheme'
    } else this.theme = 'darkTheme'
  }
}

export default new ThemeStore()
