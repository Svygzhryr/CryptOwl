import { IAllCoinsResponse, ICoin, IGlobalData, IMarkets } from '../types/api'
import { endpoints, getData } from '../utils/api'
import { create } from 'zustand'

type Store = {
  globalData: IGlobalData[] | null
  marketData: IMarkets | null
  coinData: IAllCoinsResponse | null
  getGlobalData: () => void
  getMarketData: () => void
  getCoinData: (start: number, limit: number) => void
}

const useApiStore = create<Store>((set) => ({
  globalData: null,
  marketData: null,
  coinData: null,
  getGlobalData: async () =>
    set({
      globalData: await getData(
        'https://api.coinlore.net/api/' + endpoints.global
      )
    }),
  getMarketData: async () =>
    set({
      marketData: await getData(
        'https://api.coinlore.net/api/' + endpoints.exchanges
      )
    }),
  getCoinData: async (start, limit) =>
    set({
      coinData: await getData(
        'https://api.coinlore.net/api/' + endpoints.coins(start, limit)
      )
    })
}))

export default useApiStore
