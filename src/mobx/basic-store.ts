import { create } from 'zustand'

type Store = {
  currentPage: number
  nextPage: () => void
  prevPage: () => void
}

const useBasicStore = create<Store>((set) => ({
  currentPage: 0,
  nextPage: () => set((state) => ({ currentPage: (state.currentPage += 1) })),
  prevPage: () => set((state) => ({ currentPage: (state.currentPage -= 1) }))
}))

export default useBasicStore
