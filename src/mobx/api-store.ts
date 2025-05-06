import { makeAutoObservable } from 'mobx'
import { getData } from '../utils/api'

class ApiStore<T> {
  baseUrl: string = 'https://api.coinlore.net/api/'
  data: T | null = null

  constructor() {
    makeAutoObservable(this)
  }

  getData = async (endpoint: string) => {
    this.data = await getData(this.baseUrl + endpoint)
  }
}

export default ApiStore
