import { SwitchButton } from './style'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { observer } from 'mobx-react-lite'
import themeStore from '../../mobx/theme-store'

export const ThemeSwitch = observer(() => {
  const { theme, switchTheme } = themeStore
  const changeTheme = () => {
    switchTheme()
  }

  return (
    <SwitchButton onClick={changeTheme}>
      <img src={theme === 'darkTheme' ? sun : moon} />
    </SwitchButton>
  )
})
