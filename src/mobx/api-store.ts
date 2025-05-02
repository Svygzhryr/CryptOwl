import { makeAutoObservable } from 'mobx'
import { getData } from '../utils/api'

class ApiStore {
  baseUrl: string = 'https://api.coinlore.net/api/'
  data: Promise<any> | null = null
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  getData = async (endpoint: string) => {
    this.data = getData(this.baseUrl + endpoint, this.isLoading)
  }
}

export default ApiStore
