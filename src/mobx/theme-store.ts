import { create } from 'zustand'

type Store = {
  theme: 'darkTheme' | 'lightTheme'
  switchTheme: () => void
}

const useThemeStore = create<Store>((set) => ({
  theme: 'darkTheme',
  switchTheme: () =>
    set((state) =>
      state.theme === 'darkTheme'
        ? { theme: 'lightTheme' }
        : { theme: 'darkTheme' }
    )
}))

export default useThemeStore
