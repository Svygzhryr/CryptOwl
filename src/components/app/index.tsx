import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import themeStore from '../../mobx/theme-store'
import Home from '../../pages/home'
import { News } from '../../pages/news'
import { Rates } from '../../pages/rates'
import { AppWrapper } from '../../styles/main'
import { darkTheme, lightTheme } from '../../styles/theme'
import { Header } from '../header'
import { observer } from 'mobx-react-lite'
import useThemeStore from '../../mobx/theme-store'

export const App = observer(() => {
  const { theme } = useThemeStore()
  const themes = {
    lightTheme,
    darkTheme
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rates" Component={Rates} />
          <Route path="/news" Component={News} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  )
})
