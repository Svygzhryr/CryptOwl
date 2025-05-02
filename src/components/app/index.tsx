import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from '../../pages/home'
import { News } from '../../pages/news'
import { Rates } from '../../pages/rates'
import { AppWrapper } from '../../styles/main'
import { darkTheme, lightTheme } from '../../styles/theme'
import { Header } from '../header'

export const App = () => {
  const themes = {
    lightTheme,
    darkTheme,
  }

  return (
    <ThemeProvider theme={themes['darkTheme']}>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/rates" Component={Rates} />
          <Route path="/news" Component={News} /> */}
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  )
}
