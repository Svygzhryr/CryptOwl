import { makeAutoObservable } from 'mobx'
import { getData } from '../utils/api'

class ApiStore {
  baseUrl: string = 'https://api.coinlore.net/api/'
  data: unknown | null = null
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  getData = async (endpoint: string) => {
    this.data = await getData(this.baseUrl + endpoint, this.isLoading)
  }
}

export default ApiStore
