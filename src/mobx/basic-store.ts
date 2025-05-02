import { makeAutoObservable } from 'mobx'

class BasicStore {
  currentPage = 0

  constructor() {
    makeAutoObservable(this)
  }

  nextPage() {
    this.currentPage += 1
  }

  prevPage() {
    this.currentPage -= 1
  }
}

export default new BasicStore()
