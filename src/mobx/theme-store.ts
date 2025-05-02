import { makeAutoObservable } from 'mobx'

class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export default new ThemeStore()
